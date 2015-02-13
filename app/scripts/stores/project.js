/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');
var ProjectActions = require('../actions/project');
var files = require('../files');
var {libs, helper} = require('../libraries');
var _str = require("underscore.string");


function _generateScript(libName) {
    var src = helper.find(libName).path;
    return "<script type='text/javascript' src='" + src + "'></script>";
}

function _insertLibrary(file, libName) {
    var headIndex = file.content.indexOf('</head>');
    var scripts;
    if (headIndex == -1) {
        headIndex = 0;
        scripts = _generateScript(libName) + "\n";
    } else {
        scripts = "  " + _generateScript(libName) + "\n  ";
    }

    return _str.insert(file.content, headIndex, scripts);
}

module.exports = Reflux.createStore({
    listenables: [ProjectActions],
    getInitialState: function() {
        this.project = {
            files: files,
            currentFileName: _.first(files).name,
            getFile: function(fileName) {
                return _.find(files, file => file.name === fileName);
            },
            getIndexFile: function() {
                return this.getFile('index.html');
            },
            selectIndexFile: function() {
                this.currentFileName = 'index.html';
            },
            getFileContent: function(fileName) {
                return this.getFile(fileName).content;
            },
            getCurrentFile: function() {
                return this.getFile(this.currentFileName);
            }
        };
        return this.project;
    },
    onSelectFile: function(fileName) {
        this.project.currentFileName = fileName;
        this.trigger(this.project);
    },
    onUpdateCurrentFile: function(content) {
        var file = _.find(this.project.files, file => file.name === this.project.currentFileName);
        if (file != null) {
            file.content = content;
        }
    },
    onUpdatePreview: function() {
        this.trigger(this.project);
    },
    onImportLibrary: function(libName) {
        var indexFile = this.project.getIndexFile();
        indexFile.content = _insertLibrary(indexFile, libName);
        this.project.selectIndexFile();
        this.trigger(this.project);
    }
});

