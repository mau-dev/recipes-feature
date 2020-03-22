const mongoose = require('mongoose');

//the schema
const ProfileSchema = new mongoose.Schema({
    //reference to the user model
    user: {
        /*special field type, which is an object I.D. 
        to connect it to an I.D. which is in this in the user model.*/
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fullName: {
        type: String,
        required: true
    },
    identity: {
        type: String
    },
    home: {
        type: String,
    },
    bio: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);