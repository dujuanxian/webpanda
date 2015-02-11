/** @jsx React.DOM */
var React = require('react'),
    Sidebar = require('./main/Sidebar'),
    Preview = require('./main/Preview'),
    Reflux = require('reflux'),
    ModeMapper = require('../helper/ModeMapper'),
    Editor = require('./main/Editor'),
    projectStore = require('../stores/project');

module.exports = React.createClass({
    mixins: [Reflux.connect(projectStore, "project")],
    render: function() {
        var project = this.state.project;
        var fileNames = project.files.map(f => f.name);
        var mode = ModeMapper.getMode(project.currentFileName);
        return (
            <div>
                <Sidebar fileNames={fileNames} />
                <Editor file={project.getCurrentFile()} name="editor" mode={mode} />
                <Preview content={project.getFileContent('index.html')}/>
            </div>
        );
    }
});

