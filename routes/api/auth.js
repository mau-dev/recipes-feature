const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const User = require('../../models/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const {
    check,
    validationResult
} = require('express-validator');

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


//@route    POST api/auth
//@desc      Authenticate user & get token
//@access    Public


router.post(
    '/',
    [

        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Password is required'
        ).exists()

    ],
    async (req, res) => {
       
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        //pull from req.body
        const {
            email,
            password
        } = req.body;

        try {
            //check if the user exists
            let user = await User.findOne({
                email
            });
            
            if (!user) {
                return res
                    .status(400)
                    .json({
                        //client side errors
                        errors: [{
                            msg: 'Invalid email'
                        }]
                    });
            }

        
            //match the  password user enters with the encrypted password from the database(user.oassword)
            const isMatch = await bcrypt.compare(password, user.password);

            //if not match return invalid credentials as well
            if (!isMatch) {
                return res
                    .status(400)
                    .json({
                            errors: [{
                            msg: 'Invalid password'
                        }]
                    });

            }

            const payload = {
                user: {
                    id: user.id
                }
            };
            //sign the token,passing the payload and the secret
            jwt.sign(
                payload,
                config.get('jwtSecret'), {
                    expiresIn: 3600000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    });
                }
            );

        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }


    });


module.exports = router;