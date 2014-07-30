// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone){
      var IndexView = Backbone.View.extend({
        el: $("#container"),
        initialize: function(){
          
        }
    });
  // Returning instantiated views can be quite useful for having "state"
  return IndexView;
});