// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/index'
  ], function($, _, Backbone, IndexView){
    var AppRouter = Backbone.Router.extend({
        routes: {
          '': 'index'
        },

        index: function() {
            var indexView = new IndexView();
            indexView.render();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
