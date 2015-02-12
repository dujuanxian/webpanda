/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    renderFrameContents: function() {
        var doc = this.getDOMNode().contentDocument;
        if(doc.readyState === 'complete') {
            React.render(this.props.children, doc.body);
        } else {
            setTimeout(this.renderFrameContents, 0);
        }
    },
    componentDidMount: function() {
        this.renderFrameContents();
    },
    componentDidUpdate: function() {
        this.renderFrameContents();
    },
    componentWillUnmount: function() {
        React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
    },
    render: function() {
        return <iframe />;
    }
});
