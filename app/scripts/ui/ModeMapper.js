var _ = require('lodash');

var mappers = [
    {
        mode: 'javascript',
        suffix: 'js'
    },
    {
        mode: 'xml',
        suffix: 'xml'
    },
    {
        mode: 'ruby',
        suffix: 'rb'
    },
    {
        mode: 'sass',
        suffix: 'sass'
    },
    {
        mode: 'scss',
        suffix: 'scss'
    },
    {
        mode: 'less',
        suffix: 'less'
    },
    {
        mode: 'css',
        suffix: 'css'
    },
    {
        mode: 'markdown',
        suffix: 'md'
    },
    {
        mode: 'json',
        suffix: 'json'
    },
    {
        mode: 'html',
        suffix: 'html'
    },
    {
        mode: 'coffee',
        suffix: 'coffee'
    },
    {
        mode: 'text',
        suffix: 'txt'
    }
];

module.exports = {
    getMode: function(fileName) {
        var suffix = _.last(fileName.split('.'));
        return _.find(mappers, mapper => mapper.suffix === suffix).mode || 'txt';
    }
};
