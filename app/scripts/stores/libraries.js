/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var LibrariesActions = require('../actions/libraries');
var {libs, helper} = require('../libraries');

module.exports = Reflux.createStore({
    listenables: [LibrariesActions],
    getInitialState: function() {
        this.libraries = libs;
        return this.libraries;
    },
    onAddLibrary: function(name, version, url, download) {
        console.log("### onAddLibrary: " + name);
        this.trigger(this.libraries);
    }
});

