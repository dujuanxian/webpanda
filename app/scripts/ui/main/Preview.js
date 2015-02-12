/** @jsx React.DOM */
var React = require('react'),
    Frame = require('./Frame'),
    projectActions = require('../../actions/project');

module.exports = React.createClass({
    updateContent: function(e) {
        e.preventDefault();
        projectActions.updatePreview();
    },
    render: function() {
        return (
            <div className="preview">
                <Frame>
                    <section>
                        <style>{this.props.styles}</style>
                        <p dangerouslySetInnerHTML={{__html: this.props.content}} />
                    </section>
                </Frame>
                <button onClick={this.updateContent} type="button">Run</button>
            </div>
        );
    }
});
