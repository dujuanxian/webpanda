/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');
var ProjectActions = require('../actions/project');
var files = require('../files');

module.exports = Reflux.createStore({
    listenables: [ProjectActions],
    getInitialState: function() {
        this.project = {
            files: files,
            currentFileName: _.first(files).name,
            getFileContent: function(fileName) {
                return _.find(files, file => file.name === fileName).content;
            }
        };
        return this.project;
    },
    onSelectFile: function(fileName) {
        this.project.currentFileName = fileName;
        this.trigger(this.project);
    }
});

