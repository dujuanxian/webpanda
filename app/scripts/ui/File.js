/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    propTypes: {
        fileName : React.PropTypes.string,
        onClick  : React.PropTypes.func
    },
    onClick: function() {
        this.props.onClick(this.props.fileName);
    },
    render: function() {
        return (
            <p onClick={this.onClick} className="file-name">
                {this.props.fileName}
            </p>
        );
    }
});
