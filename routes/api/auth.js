const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route    GET api/auth
//@desc      GET user by token
//@access    Private

//protect the route with the auth middleware
router.get('/', auth, async (req, res) => {
    //change the route to return user's data
    try {
        //take the user model
        const user = await User.findById(req.user.id).select('-password');
        //send the user as response
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;