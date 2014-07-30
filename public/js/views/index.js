// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
      var IndexView = Backbone.View.extend({
        el: $('#infobar'),

        events: {
            'click .infobar-add-btn': 'addItem',
        },

        addItem: function(e) {
            console.log('additem!!!');
            $('#add-item-modal').modal('show');
        },

        initialize: function() {
            $('#add-item-modal').modal('hide');
        }
    });
  // Returning instantiated views can be quite useful for having "state"
  return IndexView;
});