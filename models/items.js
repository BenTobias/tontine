var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Item = new Schema({
	title: String,
	description: String,
	cost: Number,
	startTime: Date,
	endTime: Date,
	userId: String
});

module.exports = mongoose.model('Item', Item);