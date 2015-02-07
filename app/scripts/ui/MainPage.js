/** @jsx React.DOM */
var React = require('react'),
    _ = require('lodash'),
    files = require('../files'),
    Sidebar = require('./main/Sidebar'),
    Preview = require('./main/Preview'),
    Editor = require('./main/Editor');

var getFileNames = function() {
    return files.map(f => f.name);
};

module.exports = React.createClass({
    getInitialState: function() {
        return {
            currentFileName: _.first(files).name
        }
    },
    showFileContent: function(fileName) {
        this.setState({currentFileName: fileName});
    },
    getFileContent: function(fileName) {
        return _.find(files, file => file.name === fileName).content;
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

