var _ = require('lodash');

//TODO: to map all the listed mode
var mappers = {
    'js': 'javascript',
    'xml': 'xml',
    'rb': 'ruby',
    'sass': 'sass',
    'scss': 'sass',
    'less': 'css',
    'css': 'css',
    'md': 'markdown',
    'json': 'textile',
    'html': 'htmlembedded',
    'coffee': 'coffeescript',
    'txt': 'textile',
    'haml': 'haml',
    'http': 'http',
    'jade': 'jade',
    'php': 'php',
    'py': 'python',
    'r': 'r',
    'rpm': 'rpm',
    'sh': 'shell',
    'slim': 'slim',
    'sql': 'sql',
    'yml': 'yaml'
};

module.exports = {
    getMode: function(fileName) {
        var suffix = _.last(fileName.split('.'));
        return mappers[suffix] || 'textile';
    }
};
