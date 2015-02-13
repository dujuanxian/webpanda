/** @jsx React.DOM */
var React = require('react');
var ProjectActions = require('../../actions/project');

module.exports = React.createClass({
    propTypes: {
        libraries: React.PropTypes.array.isRequired
    },
    importLibrary: (event) => {
        var libName = event.target.value;
        if (libName) {
            ProjectActions.importLibrary(libName);
        }
    },
    render: function() {
        return (
            <span className="library-importer">
                <select onChange={this.importLibrary}>
                    <option value=''>import library ...</option>
                    {this.props.libraries.map(lib =>
                            <option value={lib.name}>{lib.name}</option>
                    )}
                </select>
            </span>
        );
    }
});
