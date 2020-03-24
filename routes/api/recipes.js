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

//create recipe done works

//get recipe by id done works

//update recipe done works

//delete recipe private, done works

//get all recipes done works


//create category
//update category
//delete categoty

//create ingredient
//update ingredient
//delete ingredient


//get all categories
//get all ingredients

//get recipes by category
//get recipes by ingredient


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
                ingredients: req.body.ingredients,
                measurementsType: req.body.measurementsType,
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

// @route    GET api/recipes
// @desc     Get all recipes
// @access   Public

router.get('/', async (req, res) => {
    try {
        //default sort by most recent
        const recipes = await Recipe.find().sort({
            date: -1
        });

        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




// @route    GET api/recipes/:id
// @desc     Get recipe by ID
// @access   Public

router.get('/:id', async (req, res) => {
    try {
    
        const recipe = await Recipe.findById(req.params.id);
        
        if (!recipe) {
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        }

        res.json(recipe);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        }
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/recipes/:id
// @desc    Delete recipe
// @access  Private

//access to the user who created only
router.delete('/:id', auth, async (req, res) => {
    try {
        
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            //if id doesn't match
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        };
        //match logged in user to the creator of the recipe
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'You don\'t have an access to this action'
            });
        };
        //if user match, remove recipe
        await recipe.remove();
        res.json({
            msg: 'Recipe successfully removed'
        });
    } catch (err) {
        console.error(err.message);
        //if the post searched doesn't exist at all
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        };
        res.status(500).send('Server Error');
    };
});

// @route   POST api/recipes/:id
// @desc    Update recipe
// @access  Private

//access to the user who created only
router.put('/:id', auth, async (req, res) => {

    const {
        title,
        profilePicture,
        coverPhoto,
        description,
        mealType,
        category,
        dietRestrictions,
        tags,
        cookingTime,
        ingredients,
        measurementsType,
        preparation,
        preparationPhotos,
    } = req.body;

    
    const recipeFields = {};
    
    recipeFields.user = req.user.id;
    recipeFields.id = req.params.id;
    //add the fields
    if (title) recipeFields.title = title;
    if (profilePicture) recipeFields.profilePicture = profilePicture;
    if (coverPhoto) recipeFields.coverPhoto = coverPhoto;
    if (description) recipeFields.description = description;
    if (mealType) recipeFields.mealType = mealType;
    if (category) recipeFields.category = category;
    if (dietRestrictions) recipeFields.dietRestrictions = dietRestrictions;
    if (tags) recipeFields.tags = tags;
    if (cookingTime) recipeFields.cookingTime = cookingTime;
    if (ingredients) recipeFields.ingredients = ingredients;
    if (measurementsType) recipeFields.measurementsType = measurementsType;
    if (preparation) recipeFields.preparation = preparation;
    if (preparationPhotos) recipeFields.preparationPhotos = preparationPhotos;


    try {
        
        const recipe = await Recipe.findById(req.params.id);
       
        if (!recipe) {
            //if id doesn't match
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        };
        //match logged in user to the creator of the recipe
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({
                msg: 'You don\'t have an access to this action'
            });
        };
        //if user match update recipe
        await Recipe.findOneAndUpdate(
            
            {
                $set: recipeFields
            }
           
        );
        
        return res.json(recipeFields);
    } catch (err) {
        console.error(err.message);
        //if the post searched doesn't exist at all
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: 'Recipe not found'
            });
        };
        res.status(500).send('Server Error');
    };
});


module.exports = router;

