/*global define*/

trequire.define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    'use strict';

    var Item = Backbone.Model.extend({
        urlRoot: '/addItem',

        defaults: {
            userId: '',
            itemTitle: '',
            itemDescription: '',
            itemTags: {},
            minParticipants: 0,
            reputation: 0
        }
    });

    return Item;
});