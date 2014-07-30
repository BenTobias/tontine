var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Item = new Schema({
	title: String,
	description: String,
	cost: Double,
	startTime: DateTime,
	endTime: DateTime,
	userId: String
	}
);

Item.plugin(passportLocalMongoose);
module.exports = mongoose.model('Item', Item);