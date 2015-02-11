/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var LibrariesActions = require('../actions/libraries');

module.exports = Reflux.createStore({
    listenables: [LibrariesActions],
    getInitialState: function() {
        this.libraries = {
            names: []
        };
        return this.libraries;
    },
    onAddLibrary: function(name, version, url, download) {
        this.libraries.names.push(name);
        this.trigger(this.libraries);
    }
});

