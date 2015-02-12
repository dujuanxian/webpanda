/** @jsx React.DOM */

var React = window.React = require('react');
var Header = require('./ui/Header');
var MyProjectsPage = require('./ui/MyProjectsPage');
var ConfigPage = require('./ui/ConfigPage');
var MainPage = require('./ui/MainPage');
var Router = require('react-router');
var {DefaultRoute,Link,Route,RouteHandler} = Router;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={MainPage} />
        <Route name="MyProjectsPage" handler={MyProjectsPage} />
        <Route name="ConfigPage" handler={ConfigPage} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});


