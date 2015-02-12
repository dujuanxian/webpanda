/** @jsx React.DOM */
var React = require('react');
var ProjectActions = require('../../actions/project');

module.exports = React.createClass({
    propTypes: {
        libraries: React.PropTypes.array.isRequired
    },
    importLibrary: (lib) => ProjectActions.importLibrary.bind(this, lib.name),
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
