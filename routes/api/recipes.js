const express = require('express');
const router = express.Router();

const {
    check,
    validationResult
} = require('express-validator');
const auth = require('../../middleware/auth');

const Recipe = require('../../models/Recipe');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

//create recipe

//update recipe

//delete recipe

//create category
//update category
//delete categoty

//create ingredient
//update ingredient
//delete ingredient

//get all recipes
//get all categories
//get all ingredients

//get recipes by category
//get recipes by ingredient
//get recipes by user

// @route    POST api/recipes
// @desc     Create a recipe
// @access   Private
router.post(
    '/',
    [
        auth,
        [
            check('title', 'Title is required')
            .not()
            .isEmpty(),
            check('coverPhoto', 'Cover photo is required').not().isEmpty(),
            check('description', 'Description is required').not().isEmpty(),
            check('category', 'Category is required').not().isEmpty()

        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        try {
           
            const user = await User.findById(req.user.id).select('-password');

        
            const newRecipe = new Recipe({
                title: req.body.title,
                user: user.username,
                profilePicture: user.profilePicture,
                user: req.user.id,
                coverPhoto: req.body.coverPhoto,
                description: req.body.description,
                mealType: req.body.mealType,
                category: req.body.category,
                dietRestrictions: req.body.dietRestrictions,
                tags: req.body.tags,
                cookingTime: req.body.cookingTime,
                // preparationStep: req.body.preparation.stepOrderNumber,
                // preparationMethod: req.body.preparation.desctiotion,
                preparation: req.body.preparation,
                preparationPhotos: req.body.preparation.preparationPhotos

            });

         
           
           

            const recipe = await newRecipe.save();

            res.json(recipe);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);




// ingredients: [{
//     measurementsType: {type: String},
//     quantity: { type: Number},
//     unit: { type: String},
//     name: { type: String}
//   }],








// @route    GET api/recipes
//@desc      Test route
//@access    Public

// router.get('/', (req, res) => res.send('Recipes route'));

module.exports = router;

