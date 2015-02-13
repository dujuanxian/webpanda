/** @jsx React.DOM */
var React = require('react');
var File = require('./File');
var LibraryImporter = require('./LibraryImporter');

module.exports = React.createClass({
    propTypes: {
        fileNames: React.PropTypes.array.isRequired,
        libraries: React.PropTypes.array.isRequired
    },
    render: function() {
        var files = this.props.fileNames.map(name => <File key={name} fileName={name}/>);
        return (
            <section className="sidebar">
                <div className="title">
                    <h5>Project
                        <LibraryImporter libraries={this.props.libraries} />
                    </h5>

                </div>
                {files}
            </section>
        );
    }
});
