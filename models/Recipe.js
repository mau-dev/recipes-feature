const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RecipeSchema = new Schema({
    //posted by references
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
    measurementsType: {
        type: String
    },
    ingredients: [{
       
        quantity: { type: Number},
        unit: { type: String},
        ingredient: { type: String}
      }],
    //   ingredients: [
    //     {
    //         quantity: { type: Number},
    //         unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
    //         ingredient: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}
           
    //     }
    // ],
    // preparation: [{
    //     stepOrderNumber: { type: Number },
    //     desctiotion: { type: String}
    //   }],
    preparation: {
          type:[String]
        
      },
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