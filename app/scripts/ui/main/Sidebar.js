/** @jsx React.DOM */
var React = require('react'),
    File = require('./File');

module.exports = React.createClass({
    propTypes : {
        fileNames: React.PropTypes.array,
        onFileClick: React.PropTypes.func
    },
    onClick: function(fileName) {
        this.props.onFileClick(fileName);
    },
    render: function() {
        var files = this.props.fileNames.map(n => <File onClick={this.onClick} fileName={n}/>);
        return (
            <section className="sidebar">
                <h5>Project</h5>
                {files}
            </section>
        );
    }
});
