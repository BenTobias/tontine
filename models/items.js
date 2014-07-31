var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Item = new Schema({
	title: String,
	description: String,
	individualCost: Number,
	startTime: Date,
	endTime: Date,
	userId: String,
	participants: [Number],
	tags: [String],
	reputation: Number,
	minParticipants: Number,
	photo_url: String
});

Item.plugin(passportLocalMongoose);
module.exports = mongoose.model('Item', Item);
