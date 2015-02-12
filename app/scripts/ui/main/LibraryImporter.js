/** @jsx React.DOM */
var React = require('react');
var LibrariesActions = require('../../actions/libraries');

module.exports = React.createClass({
    propTypes: {
        libraries: React.PropTypes.array.isRequired
    },
    importLibrary: (lib) => LibrariesActions.importLibrary.bind(this, lib.name),
    render: function() {
        return (
            <span>
                <ul>
                    {this.props.libraries.map(lib => <li>
                        <button onClick={this.importLibrary(lib)}>{lib.name}</button>
                    </li>)}
                </ul>
            </span>
        );
    }
});
