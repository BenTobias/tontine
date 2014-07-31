// Filename: router.js
trequire.define([
  'jquery',
  'underscore',
  'backbone',
  'views/index',
  'views/additemform',
	'views/itemcontent'
  ], function($, _, Backbone, IndexView, AddItemFormView, ShowItemFormView){
    var AppRouter = Backbone.Router.extend({
        routes: {
          '': 'index',
          'additem': 'additem'
        },

        index: function() {
            var indexView = new IndexView();
            indexView.render();
						var showItemView = new ShowItemFormView();
						showItemView.render();
        },

        additem: function() {
          var addItemForm = new AddItemFormView();
          addItemForm.render();
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
