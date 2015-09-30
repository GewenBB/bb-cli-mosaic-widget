/* globals define */
/**
* ------------------------------------------------------------------------
* <%=widget_name%> - Javascript Definition
* ------------------------------------------------------------------------
*/


define( function (require, exports, module) {

    'use strict';

    module.name = '<%=widget_name%>';

    var $ = require('jquery');
    var angular = require('angular');
    

    var deps = [];

    /**
     * @ngInject
     */
    function run() {
        // Module is Bootstrapped
    }

    return function(widget){

        angular.module(module.name, deps)
            .constant('WIDGET_NAME', module.name )
            .value('widget', widget)
            .controller( require('./controllers') )
            .service( require('./models') )
            .run( run );

        angular.bootstrap($(widget.body), [module.name]);
    };
});