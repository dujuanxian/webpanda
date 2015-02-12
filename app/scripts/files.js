module.exports = [
    {
        name: "index.html",
        content: "<!doctype html>\n" +
        "<html>\n" +
        "  <head>\n" +
        "    <title>index</title>\n" +
        "  </head>\n" +
        "  <body>\n" +
        "    this is index content\n" +
        "  </body>\n" +
        "</html>\n"
    },
    {
        name: "README.md",
        content: "Just basic readme"
    },
    {
        name: "main.js",
        content: "/** @jsx React.DOM */" +
        "\nvar React = require('react');" +
        "\nmodule.exports = React.createClass({" +
        "\n   render: function() {" +
        "\n      return (" +
        "\n          <div>my projects are here</div>" +
        "\n      );" +
        "\n   }" +
        "\n});"
    },
    {
        name: "main.css",
        content:
        "body {" +
        "margin: 0;" +
        "padding: 10px;" +
        "color: blue;" +
        "}"
    }
];
