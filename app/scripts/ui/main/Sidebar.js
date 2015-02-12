/** @jsx React.DOM */
var React = require('react');
var File = require('./File');

module.exports = React.createClass({
    propTypes: {
        fileNames: React.PropTypes.array.isRequired
    },
    render: function() {
        var files = this.props.fileNames.map(name => <File key={name} fileName={name}/>);
        return (
            <section className="sidebar">
                <h5>Project</h5>
                {files}
            </section>
        );
    }
});
