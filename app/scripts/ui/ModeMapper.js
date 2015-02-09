var _ = require('lodash');

var mappers = {
    'js': 'javascript',
    'xml': 'xml',
    'rb': 'ruby',
    'sass': 'sass',
    'scss': 'scss',
    'less': 'less',
    'css': 'css',
    'md': 'markdown',
    'json': 'json',
    'html': 'html',
    'coffee': 'coffee',
    'txt': 'text'
};

module.exports = {
    getMode: function(fileName) {
        var suffix = _.last(fileName.split('.'));
        return mappers[suffix] || 'text';
    }
};
