/** @jsx React.DOM */

var React = require('react');
var CodeMirror = require('codemirror');
var _ = require('lodash');
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
        var extraKeys = {
            "extraKeys": {
                "Cmd-L": () => this.autoFormat()
            }
        };
        this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), _.merge(this.props, extraKeys));
        this.editor.on('change', this.handleChange);
    },

    componentDidUpdate: function() {
        if (this.editor) {
            if (this.props.content != null) {
                if (this.editor.getValue() !== this.props.content) {
                    this.editor.setValue(this.props.content);
                    this.editor.setOption("mode", this.props.mode);
                }
            }
        }
    },

    autoFormat: function() {
        var anchor = this.editor.listSelections()[0].anchor;
        var head = this.editor.listSelections()[0].head;
        this.editor.autoFormatRange(anchor, head);
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
