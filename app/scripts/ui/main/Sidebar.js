/** @jsx React.DOM */
var React = require('react'),
    File = require('./File');

module.exports = React.createClass({
    propTypes: {
        fileNames: React.PropTypes.array.isRequired
    },
    render: function() {
        var files = this.props.fileNames.map(n => <File fileName={n}/>);
        return (
            <section className="sidebar">
                <h5>Project</h5>
                {files}
            </section>
        );
    }
});
