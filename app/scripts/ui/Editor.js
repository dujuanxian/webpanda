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

module.exports = React.createClass({
    propTypes: {
        mode  : React.PropTypes.string,
        theme : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            name   : 'editor',
            mode   : 'text',
            theme  : 'tomorrow'
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
        this.editor.setTheme('ace/theme/' + this.props.theme);
    },
    componentWillReceiveProps: function(nextProps) {
        this.editor.setValue(nextProps.content);
    },
    render: function() {
        return (<section id={this.props.name}>{this.props.content}</section>);
    }
});
