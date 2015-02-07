/** @jsx React.DOM */
var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <span className="text-muted">Web Panda</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>
                    <a>
                        <Link to="/">Editor</Link>
                    </a>
                    <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                    <a>
                        <Link to="MyProjectsPage">MyProjectsPage</Link>
                    </a>
                    <span>&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                    <a>
                        <Link to="ConfigPage">Config</Link>
                    </a>
                </span>
            </div>
        );
    }
});
