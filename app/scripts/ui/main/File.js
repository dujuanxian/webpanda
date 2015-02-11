/** @jsx React.DOM */
var React = require('react');
var ProjectActions = require('../../actions/project');

module.exports = React.createClass({
    propTypes: {
        fileName: React.PropTypes.string.isRequired
    },
    onClick: function() {
        ProjectActions.selectFile(this.props.fileName);
    },
    render: function() {
        return (
            <p onClick={this.onClick} className="file-name">
                {this.props.fileName}
            </p>
        );
    }
});
