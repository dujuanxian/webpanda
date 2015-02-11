/** @jsx React.DOM */

var ace = require('brace');
var React = require('react');
var Actions = require('../../actions/project');
var Reflux = require('reflux');
var stores = require('../../stores/project');
require('brace/theme/textmate');
require('../../helper/ModeDependencies');

module.exports = React.createClass({
    mixins: [Reflux.connect(stores, "project")],
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
    createEditor: function() {
        this.editor = ace.edit(this.props.name);
        this.editor.getSession().setMode('ace/mode/' + this.props.mode);
        this.editor.setTheme('ace/theme/textmate');
        this.editor.setValue(this.state.project.getFileContent(this.props.fileName));
    },
    componentDidMount: function() {
        this.createEditor();
    },
    componentWillUpdate: function() {
        this.state.project.files.map(file => {
            if (file.name === this.props.fileName) {
                file.content = this.editor.getValue();
            }
        });
    },
    componentDidUpdate: function() {
        this.createEditor();
    },
    render: function() {
        return (<section id={this.props.name}></section>);
    }
});
