/** @jsx React.DOM */

var React = window.React = require('react'),
    mountNode = document.getElementById("app");

var WebPandaApp = React.createClass({
    render: function() {
        return (
            <div>
                <h3>WebPanda</h3>
                <p>Free Offline Web Development Tool</p>
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

