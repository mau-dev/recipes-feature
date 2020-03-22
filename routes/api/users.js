const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
//express validator for authentication
const {
    check,
    validationResult
} = require('express-validator');

const User = require('../../models/User');



//@route    POST api/users
//@desc      register user
//@access    Public

router.post(
    '/',
    [
        check('username', 'Username is required')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({
            min: 6
        })

    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        //destructure req.body
        const {
            username,
            email,
            profilePicture,
            password
        } = req.body;

        try {
            //check if the user exists
            let user = await User.findOne({
                email
            });

            if (user) {
                return res
                    .status(400)
                    .json({
                        //get same errors on client side
                        errors: [{
                            msg: 'User already exists'
                        }]
                    });
            }

          
            user = new User({
                username,
                email,
                profilePicture,
                password
            });

            //encrypt password

            const salt = await bcrypt.genSalt(10);
           
            user.password = await bcrypt.hash(password, salt);

            //save the user to the db 
            await user.save();
            console.log('user saved to database');
           

            const payload = {
                user: {
                    id: user.id
                }
            };
           
            jwt.sign(
                payload,
                config.get('jwtSecret'), {
                    expiresIn: 80000000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    });
                }
            );
         // res.send('User successfully registered');
        console.log('User successfully registered');

        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }


    });

module.exports = router;