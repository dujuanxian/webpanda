/** @jsx React.DOM */
var React = require('react');

var Preview = React.createClass({
    render: function() {
        return (
            <section className="preview" dangerouslySetInnerHTML={{__html: this.props.content}}>
            </section>
        );
    }
});

module.exports = Preview;
