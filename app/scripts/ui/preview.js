/** @jsx React.DOM */
var React = require('react');

var Preview = React.createClass({
    render: function() {
        return (
            <section className="preview">
                <h3>WebPanda</h3>
                <p>Free Offline Web Development Tool</p>
            </section>
        );
    }
});

module.exports = Preview;
