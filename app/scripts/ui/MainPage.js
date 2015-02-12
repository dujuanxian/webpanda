/** @jsx React.DOM */
var React = require('react');
var Sidebar = require('./main/Sidebar');
var Preview = require('./main/Preview');
var Reflux = require('reflux');
var ModeMapper = require('../helper/ModeMapper');
var Editor = require('./main/Editor');
var projectStore = require('../stores/project');
var LibraryImporter = require('./main/LibraryImporter');
var librariesStore = require('../stores/libraries');

module.exports = React.createClass({
    mixins: [
        Reflux.connect(projectStore, "project"),
        Reflux.connect(librariesStore, "libraries")
    ],
    render: function() {
        var project = this.state.project;
        var libraries = this.state.libraries;

        var fileNames = project.files.map(f => f.name);
        var mode = ModeMapper.getMode(project.currentFileName);
        return (
            <div>
                <LibraryImporter libraries={libraries} />
                <Sidebar fileNames={fileNames} />
                <Editor file={project.getCurrentFile()} name="editor" mode={mode} />
                <Preview styles={project.getFileContent('main.css')} content={project.getFileContent('index.html')}/>
            </div>
        );
    }
});

