/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
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
