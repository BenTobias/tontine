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
								'click .symbol': 'showItem'
            },

            addItem: function(e) {
                $('#add-item-modal').modal('show');

                // Changes the route
                Backbone.history.navigate('/additem', true);
            },

						showItem: function(e) {
              $('#show-item-modal').modal('show');
							
							Backbone.history.navigate('/showitem', true);
						},
						
            initialize: function() {
                $('#add-item-modal').modal('hide');

                $('#add-item-modal').on('hidden.bs.modal', function (e) {
                    Backbone.history.navigate('/', true);
                })
            }
        });

    // Returning instantiated views can be quite useful for having "state"
    return IndexView;
});