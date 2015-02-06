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
        content: "<!doctype html>\n" +
        "  <head>\n" +
        "    <title>index</title>\n" +
        "  </head>\n" +
        "  <body>\n" +
        "    this is index content\n" +
        "  </body>\n" +
        "</html>\n"
    },
    {
        name: "README.md",
        content: "Just basic readme"
    }
];

var getFileNames = function() {
    return files.map(f => f.name);
};

var WebPandaApp = React.createClass({
    getInitialState: function() {
        return {
            currentFileName: _.first(files).name
        }
    },
    showContent: function(fileName) {
        this.setState({currentFileName: fileName});
    },
    getContent: function() {
        return _.chain(files)
            .find(file => file.name === this.state.currentFileName)
            .value()
            .content;
    },
    render: function() {
        return (
            <div>
                <Sidebar fileNames={getFileNames()} onFileClick={this.showContent}/>
                <Preview content={this.getContent()}/>
                <Editor name="editor" content={this.getContent()} theme="tomorrow" mode="javascript" ref="editor" />
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

