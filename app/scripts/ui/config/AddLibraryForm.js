/** @jsx React.DOM */
var React = require('react/addons');

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
        alert(this.state.name);
    },
    render: function() {
        return (
            <div>
                <input type="text" placeholder="name" valueLink={this.linkState('name')} />
                <input type="text" placeholder="version" valueLink={this.linkState('version')} />
                <input type="text" placeholder="url" valueLink={this.linkState('url')} />
                <input type="checkbox" checkedLink={this.linkState('download')} />
                <button onClick={this.handleClick}>OK</button>
            </div>
        );
    }
});
