const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	profilePicture: {
		type: String,
		default: 'https://i.imgur.com/Vnu8YAb.png?1'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model('user', UserSchema);
