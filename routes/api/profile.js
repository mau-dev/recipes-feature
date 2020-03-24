const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private

//@to do: //get recipes by user show on profile
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile.populate('user', ['username', 'profilePicture']));

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private


router.post(
    '/',
    [
        auth,
        [
            check('fullName', 'Name is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
       
        const {
            fullName,
            identity,
            home,
            bio
        } = req.body;

        //build profile object
        const profileFields = {};
        
        profileFields.user = req.user.id;
        //add the fields
        if (fullName) profileFields.fullName = fullName;
        if (identity) profileFields.identity = identity;
        if (home) profileFields.home = home;
        if (bio) profileFields.bio = bio;
        // console.log(profileFields.fullName);

        //update and insert the profile in the db
        try {
            //take profile model, find by user id
            let profile = await Profile.findOne({
                user: req.user.id
            });
            //if profile exists just update
            if (profile) {
              
                profile = await Profile.findOneAndUpdate(
                   
                    {
                        user: req.user.id
                    },
                 
                    {
                        $set: profileFields
                    },
                    
                    {
                        new: true
                    }
                );
                //return updated profile
                return res.json(profile);
            }
            //if profile not found, create new  profile 
            //by setting profile to new profile instance
            profile = new Profile(profileFields);

        
            await profile.save();
            //return created profile
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

        // res.send('Hi profile');
    }
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public


router.get('/', async (req, res) => {
    try {
        //populate from the user model with username and profilePicture
        const profiles = await Profile.find().populate('user', ['username', 'profilePicture']);
        res.json(profiles);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID (by url params)
// @access  Public


router.get('/user/:user_id', async (req, res) => {
    try {
        //find by user id from URL params '/user/:user_id'
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['username', 'profilePicture']);
        if (!profile) return res.status(400).json({
            msg: 'Profile not found'
        });

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectID') {
            //if the id doesnt exist
            return res.status(400).json({
                msg: 'Profile not found'
            });
        }
        res.status(500).send('Server error');
    }
});


// @route   DELETE api/profile
// @desc    Delete profile, user & recipes
// @access  Private


router.delete('/', auth, async (req, res) => {
    try {
        // @todo - remove users recipes

        //Remove profile
        await Profile.findOneAndRemove({
            user: req.user.id
        });

        //Remove user
        await User.findOneAndRemove({
            _id: req.user.id
        });
        res.json({
            msg: 'User deleted'
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;