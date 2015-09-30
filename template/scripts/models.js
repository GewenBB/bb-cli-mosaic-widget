/**
 * Models
 * @module models
 */
define(function(require, exports) {

    'use strict';

    /**
     * @constructor
     * @ngInject
     */
    function WidgetModel(widget) {
        this.data = [];
        this.widget = widget;
    }

    WidgetModel.prototype.getPreference = function(preference){
        return this.widget.getPreference(preference);
    };

    WidgetModel.prototype.setPreference = function(preference, value){
        this.widget.setPreference(preference, value);
    };

    /**
     * Export Models
     */
    exports.WidgetModel = WidgetModel;
});
