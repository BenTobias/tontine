var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');



var Item = new Schema({
	title: String,
	titleKey: String,
	description: String,
	cost: Number,
	startTime: Date,
	endTime: Date,
	userId: String,
	participants: [],
	keywords: [],
	photo_url: String
});

Item.methods.search = function(keywords) {
	Item.find({keywords: {$regex: new RegExp("^" + keyword)}}, function(err, matching_results) {
		return matching_results;
	});
};




module.exports = mongoose.model('Item', Item);