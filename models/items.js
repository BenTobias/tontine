var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Item = new Schema({
	title: String,
	description: String,
	cost: Number,
	startTime: Date,
	endTime: Date,
	userId: String
});

Item.plugin(passportLocalMongoose);
module.exports = mongoose.model('Item', Item);