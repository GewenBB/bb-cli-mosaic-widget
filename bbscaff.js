var fs = require('fs');
var path = require('path');

module.exports = function(bbscaff) {
    bbscaff.prompt([
        {
            name: 'widget_title',
            message: 'Widget title'
        },
        {
            name: 'widget_name',
            message: 'Widget name',
            'default': function(answers) {
                return answers.widget_title.replace(/ /gi, '-').toLowerCase();
            }
        },
        {
            name: 'widget_author',
            message: 'Widget author',
            'default': 'Author Name <author@backbase.com>'
        },
        {
            name: 'widget_version',
            message: 'Widget version',
            'default': '0.1.0'
        },
        {
            name: 'widget_description',
            message: 'Widget description',
            'default': 'A mosaic widget'
        },
        {
            name: 'bundle_name',
            message: 'Bundle name',
            'default': bbscaff.getCurrentBundle()
        },
        {
            name: 'bundle_prefix',
            message: 'Bundle prefix',
            'default': bbscaff.getPrefix(bbscaff.getCurrentBundle())
        }
    ], function(answers){
        bbscaff.generate(answers, answers.widget_name, function() {

        });
    });
};
