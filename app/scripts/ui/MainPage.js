/** @jsx React.DOM */
var React = require('react'),
    Sidebar = require('./main/Sidebar'),
    Preview = require('./main/Preview'),
    ModeMapper = require('./ModeMapper'),
    Editor = require('./main/Editor'),
    Reflux = require('reflux'),
    stores = require('../stores');

module.exports = React.createClass({
    mixins: [Reflux.connect(stores, "project")],
    render: function() {
        var project = this.state.project;
        var fileNames = project.files.map(f => f.name);
        var mode = ModeMapper.getMode(project.currentFileName);
        return (
            <div>
                <Sidebar fileNames={fileNames} />
                <Editor content={project.getCurrentFileContent()} name="editor" theme="tomorrow" mode={mode} />
                <Preview content={project.getFileContent('index.html')}/>
            </div>
        );
    }
});

