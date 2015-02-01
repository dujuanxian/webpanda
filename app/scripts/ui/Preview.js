/** @jsx React.DOM */
var React = require('react');

var Preview = React.createClass({
    render: function() {
        return (
            <section className="preview">
            {this.props.content}
            </section>
        );
    }
});

module.exports = Preview;
