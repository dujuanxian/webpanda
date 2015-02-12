/** @jsx React.DOM */
var React = require('react'),
    Sidebar = require('./main/Sidebar'),
    Preview = require('./main/Preview'),
    Reflux = require('reflux'),
    ModeMapper = require('../helper/ModeMapper'),
    Editor = require('./main/Editor'),
    projectStore = require('../stores/project');
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

