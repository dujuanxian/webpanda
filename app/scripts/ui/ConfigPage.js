/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var AddLibraryForm = require('./config/AddLibraryForm');
var librariesStore = require('../stores/libraries');

module.exports = React.createClass({
    mixins: [Reflux.connect(librariesStore, "libraries")],
    render: function() {
        var libraries = this.state.libraries;
        var names = libraries.names.map(function(name) {
            return <div>{name}</div>
        });
        return (
            <div>
                {names}
                <AddLibraryForm />
            </div>
        );
    }
});
