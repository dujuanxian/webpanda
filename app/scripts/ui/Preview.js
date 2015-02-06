/** @jsx React.DOM */
var React = require('react');

var Preview = React.createClass({
    propTypes: {
        content: React.PropTypes.string
    },
    render: function() {
        return (
            <section className="preview" dangerouslySetInnerHTML={{__html: this.props.content}}>
            </section>
        );
    }
});

module.exports = Preview;
