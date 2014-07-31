trequire.define([
    'jquery',
    'underscore',
    'backbone',
    'router', // Request router.js
    ], function($, _, Backbone, Router){

        var IndexView = Backbone.View.extend({
            el: $('#isotope-demo'),

            events: {
								'click .symbol': 'showItem'
            },

						showItem: function(e) {
              $('#show-item-modal').modal('show');
							
							Backbone.history.navigate('/showitem', true);
						},
						
            initialize: function() {
              $('#show-item-modal').modal('hide');
            }
        });

    // Returning instantiated views can be quite useful for having "state"
    return IndexView;
});