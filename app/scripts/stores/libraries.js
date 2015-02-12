/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var LibrariesActions = require('../actions/libraries');

module.exports = Reflux.createStore({
    listenables: [LibrariesActions],
    getInitialState: function() {
        this.libraries = [
            {
                name: 'jquery',
                version: '1.9.1',
                localPath: "app/libraries/jquery-1.9.1.js"
            },
            {
                name: 'react-with-addons',
                version: '0.12.2',
                localPath: "app/libraries/react-with-addons-0.12.2.js"
            }
        ];
        return this.libraries;
    },
    onAddLibrary: function(name, version, url, download) {
        this.libraries.names.push(name);
        this.trigger(this.libraries);
    },
    onImportLibrary: function(name) {
        console.log('### name: ' + name);
        this.trigger(this.libraries);
    }
});

