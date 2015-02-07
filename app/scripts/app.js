/** @jsx React.DOM */

var React = window.React = require('react'),
    Header = require('./ui/Header'),
    MyProjectsPage = require('./ui/MyProjectsPage'),
    ConfigPage = require('./ui/ConfigPage'),
    MainPage = require('./ui/MainPage');

var Router = require('react-router');
var {DefaultRoute,Link,Route,RouteHandler} = Router;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <hr />
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


