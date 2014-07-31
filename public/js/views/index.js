trequire.define([
    'jquery',
    'underscore',
    'backbone',
    'router', // Request router.js
    ], function($, _, Backbone, Router){

        var IndexView = Backbone.View.extend({
            el: $('#infobar'),

            events: {
                'click .infobar-add-btn': 'addItem',
            },

            addItem: function(e) {
                $('#add-item-modal').modal('show');

                // Changes the route
                Backbone.history.navigate('/additem', true);
            },

            initialize: function() {
                $('#add-item-modal').modal('hide');
            }
        });

    // Returning instantiated views can be quite useful for having "state"
    return IndexView;
});