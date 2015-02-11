/** @jsx React.DOM */
var React = require('react/addons');
var LibrariesActions = require('../../actions/libraries');

module.exports = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function() {
        return {
            name: '',
            version: '',
            url: '',
            download: true
        }
    },
    handleClick: function() {
        LibrariesActions.addLibrary(this.state.name, this.state.version, this.state.url, this.state.download);
    },
    render: function() {
        return (
            <div>
                <input type="text" placeholder="name" valueLink={this.linkState('name')} />
                <input type="text" placeholder="version" valueLink={this.linkState('version')} />
                <input type="text" placeholder="url" valueLink={this.linkState('url')} />
                <span>
                    <input type="checkbox" checkedLink={this.linkState('download')} />
                    Download
                </span>
                <button onClick={this.handleClick}>OK</button>
            </div>
        );
    }
});
