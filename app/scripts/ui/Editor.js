/** @jsx React.DOM */

var ace = require('brace');
var React = require('react');
require('brace/theme/monokai');
require('brace/theme/github');
require('brace/theme/tomorrow');
require('brace/theme/kuroir');
require('brace/theme/twilight');
require('brace/theme/xcode');
require('brace/theme/textmate');
require('brace/theme/terminal');
require('brace/theme/solarized_dark');
require('brace/theme/solarized_light');

//include as many of the libraries
require('brace/mode/javascript');
require('brace/mode/java');
require('brace/mode/php');
require('brace/mode/python');
require('brace/mode/xml');
require('brace/mode/ruby');
require('brace/mode/sass');
require('brace/mode/markdown');
require('brace/mode/mysql');
require('brace/mode/json');
require('brace/mode/html');
require('brace/mode/handlebars');
require('brace/mode/golang');
require('brace/mode/csharp');
require('brace/mode/coffee');
require('brace/mode/css');

var Editor = React.createClass({
    propTypes: {
        mode  : React.PropTypes.string,
        theme : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            name   : 'editor',
            mode   : 'javascript',
            theme  : 'monokai'
        };
    },
    shouldComponentUpdate: function() {
        return false;
    },
    componentDidMount: function() {
        var editor = ace.edit(this.props.name);
        editor.getSession().setMode('ace/mode/' + this.props.mode);
        editor.setTheme('ace/theme/' + this.props.theme);
        this.setState({editor: editor});
    },
    render: function() {
        return (<section id={this.props.name}>{this.props.content}</section>);
    },
    setContent: function(content) {
        this.state.editor.setValue(content);
    }
});

module.exports = Editor;