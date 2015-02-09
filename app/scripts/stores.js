/** @jsx React.DOM */
var React = require('react');
var Actions = require('./actions');
var files = require('./files');
var Reflux = require('reflux');
var _ = require('lodash');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getInitialState: function() {
        this.project = {
            files: files,
            currentFileName: _.first(files).name,
            getCurrentFileContent: function() {
                return this.getFileContent(this.currentFileName);
            },
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

