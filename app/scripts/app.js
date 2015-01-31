/** @jsx React.DOM */

var React = window.React = require('react'),
    Sidebar = require('./ui/sidebar'),
    Preview = require('./ui/preview'),
    mountNode = document.getElementById("app");

var WebPandaApp = React.createClass({
    render: function() {
        return (
            <div>
                <Sidebar />
                <Preview />
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

