/** @jsx React.DOM */
var React = require('react'),
    Title = require('./title');

var Sidebar = React.createClass({
    handleClick: function(title) {
        this.props.showContent(title);
    },
    render: function() {
        var that = this;
        var titleList = this.props.titleList.map(function(title){
            return <Title handleClick={that.handleClick} data={title}/>;
        });
        return (
            <section className="sidebar">
                {titleList}
            </section>
        );
    }
});

module.exports = Sidebar;
