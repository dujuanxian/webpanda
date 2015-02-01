/** @jsx React.DOM */
var React = require('react'),
    Title = require('./Title');

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
                <h5>Project</h5>
                {titleList}
            </section>
        );
    }
});

module.exports = Sidebar;
