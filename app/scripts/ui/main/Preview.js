/** @jsx React.DOM */
var React = require('react');
var ProjectActions = require('../../actions/project');

module.exports = React.createClass({
    propTypes: {
        content: React.PropTypes.string.isRequired
    },
    updateContent: function(e) {
        e.preventDefault();
        ProjectActions.updatePreview();
    },
    render: function() {
        return (
            <div className="preview">
                <section dangerouslySetInnerHTML={{__html: this.props.content}} />
                <button onClick={this.updateContent} type="button">Run</button>
            </div>
        );
    }
});
