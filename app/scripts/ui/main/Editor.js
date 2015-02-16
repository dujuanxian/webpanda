/** @jsx React.DOM */

var React = require('react');
var CodeMirror = require('codemirror');
require('../../helper/ModeDependencies');
require('./formatting');

var CodeMirrorEditor = React.createClass({
    getInitialState: function() {
        return { isControlled: this.props.value != null };
    },

    propTypes: {
        value: React.PropTypes.string,
        defaultValue: React.PropTypes.string,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        onChange: React.PropTypes.func
    },

    componentDidMount: function() {
        this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), this.props);
        this.editor.on('change', this.handleChange);
        this.autoFormat();
    },

    componentDidUpdate: function() {
        if (this.editor) {
            if (this.props.content != null) {
                if (this.editor.getValue() !== this.props.content) {
                    this.editor.setValue(this.props.content);
                    this.editor.setOption("mode", this.props.mode);
                    this.autoFormat();
                }
            }
        }
    },

    autoFormat: function() {
        this.editor.autoFormatRange({line:0, ch:0}, {line:this.editor.lineCount(), ch: this.editor.getValue().length});
    },

    handleChange: function() {
        if (this.editor) {
            var value = this.editor.getValue();
            if (value !== this.props.content) {
                this.props.onChange && this.props.onChange({value: value});
                if (this.editor.getValue() !== this.props.content) {
                    if (this.state.isControlled) {
                        this.editor.setValue(this.props.content);
                    } else {
                        this.props.content = value;
                    }
                }
            }
        }
    },

    render: function() {
        var editor = React.createElement('textarea', {
            ref: 'editor',
            value: this.props.value,
            readOnly: this.props.readOnly,
            defaultValue: this.props.defaultValue,
            onChange: this.props.onChange,
            style: {height: '100%'},
            className: 'form-control',
            mode: this.props.mode
        });

        return React.createElement('div', {style: this.props.style, className: this.props.className}, editor);
    }
});

module.exports = CodeMirrorEditor;
