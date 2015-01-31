/** @jsx React.DOM */
var React = require('react');

var Sidebar = React.createClass({
    render: function() {
        var titleList = this.props.titleList.map(function(title){
            return (
                <p>{title.title}</p>
            );
        });
        return (
            <section className="sidebar">
                {titleList}
            </section>
        );
    }
});

module.exports = Sidebar;
