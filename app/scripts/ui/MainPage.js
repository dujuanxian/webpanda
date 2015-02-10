/** @jsx React.DOM */
var React = require('react'),
    Sidebar = require('./main/Sidebar'),
    Preview = require('./main/Preview'),
    Reflux = require('reflux'),
    stores = require('../stores'),
    ModeMapper = require('./helper/ModeMapper'),
    Editor = require('./main/Editor');

module.exports = React.createClass({
    mixins: [Reflux.connect(stores, "project")],
    render: function() {
        var project = this.state.project;
        var fileNames = project.files.map(f => f.name);
        var mode = ModeMapper.getMode(project.currentFileName);
        return (
            <div>
                <Sidebar fileNames={fileNames} />
                <Editor content={project.getCurrentFileContent()} name="editor" mode={mode} />
                <Preview content={project.getFileContent('index.html')}/>
            </div>
        );
    }
});

