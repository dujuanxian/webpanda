/** @jsx React.DOM */
var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
    render: function() {
        return (
            <header className="page-header">
                <h1>Web Panda</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Editor</Link></li>
                        <li><Link to="MyProjectsPage">MyProjectsPage</Link></li>
                        <li><Link to="ConfigPage">Config</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
});
