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
    showFileContent: function(fileName) {
        this.setState({currentFileName: fileName});
    },
    getFileContent: function(fileName) {
        return _.chain(files)
            .find(file => file.name === fileName)
            .value()
            .content;
    },
    render: function() {
        return (
            <div>
                <Sidebar fileNames={getFileNames()} onFileClick={this.showFileContent}/>
                <Editor name="editor" content={this.getFileContent(this.state.currentFileName)} theme="tomorrow" mode="javascript" ref="editor" />
                <Preview content={this.getFileContent('index.html')}/>
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

