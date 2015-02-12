/** @jsx React.DOM */

var ace = require('brace');
var React = require('react');
var ProjectActions = require('../../actions/project');
require('brace/theme/textmate');
require('../../helper/ModeDependencies');

module.exports = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        mode: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            name: 'editor',
            mode: 'text'
        };
    },
    shouldComponentUpdate: function() {
        return false;
    },
    componentDidMount: function() {
        // `editor` is nothing to do with `render`, so we can put it in `this`
        // see: http://stackoverflow.com/a/28346344/342235
        this.editor = ace.edit(this.props.name);
        this.editor.getSession().setMode('ace/mode/' + this.props.mode);
        this.editor.setTheme('ace/theme/textmate');
    },
    componentWillReceiveProps: function(nextProps) {
        ProjectActions.updateFile(this.props.file.name, this.editor.getValue());
        this.editor.getSession().setMode('ace/mode/' + nextProps.mode);
        this.editor.setValue(nextProps.file.content);
    },
    render: function() {
        return (<section id={this.props.name}>{this.props.file.content}</section>);
    }
});
