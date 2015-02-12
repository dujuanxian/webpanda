/** @jsx React.DOM */
var React = require('react');
var _ = require('lodash');

var _libs = [
    {
        name: 'jquery',
        version: '1.9.1',
        path: "app/libraries/jquery-1.9.1.js"
    },
    {
        name: 'react-with-addons',
        version: '0.12.2',
        path: "app/libraries/react-with-addons-0.12.2.js"
    }
];

module.exports = {
    libs: _libs,
    helper: {
        find: function(name) {
            return _.find(_libs, (lib) => lib.name === name);
        }
    }
};
