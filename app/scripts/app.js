/** @jsx React.DOM */

var React = window.React = require('react'),
    Sidebar = require('./ui/sidebar'),
    Preview = require('./ui/preview'),
    Ace = require('./ui/ace-editor'),
    _ = require('underscore'),
    mountNode = document.getElementById("app");

var files = [
    {
        title: "index.html",
        content: "<!doctype html><head><title>index</title></head><body>this is index content</body></html>"
    },
    {
        title: "README.md",
        content: "Just basic readme"
    }
];

var getTitleList = function() {
    return _.chain(files)
        .map(function(file){return _.pick(file,'title')})
        .value();
}();

var WebPandaApp = React.createClass({
    getInitialState: function() {
        return {
            activeTitle: _.first(files).title
        }
    },
    showContent: function(title) {
        this.setState({activeTitle: title});
    },
    getContent: function() {
        var that = this;
        return _.chain(files)
            .filter(function(file){return (file.title === that.state.activeTitle)})
            .first()
            .value()
            .content;
    },
    render: function() {
        return (
            <div>
                <Sidebar titleList={getTitleList} showContent={this.showContent}/>
                <Preview content={this.getContent()}/>
                <Ace name="ace-editor" content={this.getContent()} theme="textmate" mode="javascript"/>
            </div>
        );
    }
});

React.render(<WebPandaApp />, mountNode);

