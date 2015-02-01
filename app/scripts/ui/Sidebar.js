/** @jsx React.DOM */
var React = require('react'),
    File = require('./File');

var Sidebar = React.createClass({
    onClick: function(fileName) {
        this.props.onFileClick(fileName);
    },
    render: function() {
        var that = this;
        var files = this.props.fileNames.map(function(fileName) {
            return <File onClick={that.onClick} fileName={fileName}/>;
        });
        return (
            <section className="sidebar">
                <h5>Project</h5>
                {files}
            </section>
        );
    }
});

module.exports = Sidebar;
