// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/index'
  ], function($, _, Backbone, IndexView){
      var AppRouter = Backbone.Router.extend({
        routes: {
          '/': 'index',
      }
  });

      var initialize = function(){
        var app_router = new AppRouter;
        app_router.on('index', function(){
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      var indexView = new IndexView();
      indexView.render();
  });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
