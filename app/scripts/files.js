module.exports = [
    {
        name: "index.html",
        content: "<!doctype html>\n" +
        "  <head>\n" +
        "    <title>index</title>\n" +
        "    <link rel='stylesheet' href='main.css'>\n" +
        "    <script src='http://fb.me/react-0.8.0.js'></script>\n" +
        "    <script src='http://fb.me/JSXTransformer-0.8.0.js'></script>\n" +
        "  </head>\n" +
        "  <body>\n" +
        "    this is index content\n" +
        "  </body>\n" +
        "  <script src='app.js'></script>\n" +
        "</html>\n"
    },
    {
        name: "README.md",
        content: "Just basic readme"
    },
    {
        name: "app.js",
        content: "/** @jsx React.DOM */" +
        "\nvar React = require('react');" +
        "\nvar App = React.createClass({" +
        "\n   render: function() {" +
        "\n      return (" +
        "\n          <div>my projects are here</div>" +
        "\n      );" +
        "\n   }" +
        "\n});" +
        "\nReact.renderComponent(<APP />,document.body);"
    },
    {
        name: "main.css",
        content:
        "body {" +
            "margin: 0;" +
            "padding: 10px;" +
            "color: #ccc;" +
        "}"
    }
];
