const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RecipeSchema = new Schema({
    //references
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    profilePicture: {
        type: String
    },
   //recipe body
    title: {
        type: String,
        required: true
    },
    coverPhoto: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        
    },
    category: {
        type: String,
        required: true
    },
    dietRestrictions: {
        type: [String]
    },
    tags: {
        type: [String]
    },
    cookingTime: {
        type: Number
    },
    ingredients: [{
        measurementsType: {type: String},
        quantity: { type: Number},
        unit: { type: String},
        name: { type: String}
      }],
    preparation: [{
        stepOrderNumber: { type: Number },
        desctiotion: { type: String}
      }],
    preparationPhotos: {
        type: [String]
    },
    //interactions
    saves: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    savesCunter: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Recipe = mongoose.model('recipe', RecipeSchema);