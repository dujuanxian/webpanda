/** @jsx React.DOM */

var React = window.React = require('react'),
    Sidebar = require('./ui/Sidebar'),
    Preview = require('./ui/Preview'),
    Editor = require('./ui/Editor'),
    _ = require('underscore'),
    mountNode = document.getElementById("app");

var files = [
    {
        name: "index.html",
        content: "<!doctype html><head><title>index</title></head><body>this is index content</body></html>"
    },
    {
        name: "README.md",
        content: "Just basic readme"
    }
];

var getFileNames = function() {
    return _.chain(files)
        .map(function(f) { return f.name });
};

var WebPandaApp = React.createClass({
    getInitialState: function() {
        return {
            currentFileName: _.first(files).name
        }
    },
    showContent: function(fileName) {
        this.setState({currentFileName: fileName}, function() {
            this.refs.editor.setContent(this.getContent());
        }.bind(this));
    },
    getContent: function() {
        var that = this;
        return _.chain(files)
            .filter(function(file){return (file.name === that.state.currentFileName)})
            .first()
            .value()
            .content;
    },
    render: function() {
        return (
            <div>
                <Sidebar fileNames={getFileNames()} onFileClick={this.showContent}/>
                <Preview content={this.getContent()}/>
                <Editor name="editor" content={this.getContent()} theme="textmate" mode="javascript" ref="editor" />
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

