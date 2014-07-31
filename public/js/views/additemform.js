trequire.define([
  'jquery',
  'underscore',
  'backbone',
  '../models/item'
  ], function($, _, Backbone, Item){
      var AddItemFormView = Backbone.View.extend({
        el: $('#add-item-modal'),

        events: {
            'click .add-item-modal-form-submit-btn': 'submitItem',
        },

        getNewItemFormDict: function() {
            var tagString = $('#add-item-modal-form-tags').val();
            var tags = tagString.split(',');
            tags = _.map(tags, function(tag){ 
                return tag.trim()
            });

            return {
                userId: '',
                itemTitle: $('#add-item-modal-form-title').val(),
                itemDescription: $('#add-item-modal-form-description').val(),
                itemTags: tags,
                minParticipants: $('#add-item-modal-form-participants').val(),
                individualCost: $('#add-item-modal-form-cost').val(),
                reputation: $('#add-item-modal-form-reputation').val(),
                endDate: $('#add-item-modal-form-enddate').val()
            }
        },

        submitItem: function(e) {
            // submit item logic
            $('#add-item-modal').modal('hide');

            var newItemParams = this.getNewItemFormDict();
            var newItem = new Item(newItemParams);
            newItem.save();

            // Clears the form
            $('#add-item-modal-form-container')[0].reset();

            // Changes the route to index
            Backbone.history.navigate('/', true);
        },

        initialize: function() {
            $('#add-item-modal-form-enddate').datepick();
        }
    });
  // Returning instantiated views can be quite useful for having "state"
  return AddItemFormView;
});