/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');

module.exports = {
    selectFile: Reflux.createAction(),
    updateCurrentFile: Reflux.createAction(),
    updatePreview: Reflux.createAction()
};
