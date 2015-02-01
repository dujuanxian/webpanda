/** @jsx React.DOM */
var React = require('react');

var Title = React.createClass({
    handleClick: function() {
        this.props.handleClick(this.props.data.title);
    },
    render: function() {
        return (
            <p onClick={this.handleClick} className="title">
                {this.props.data.title}
            </p>
        );
    }
});

module.exports = Title;
