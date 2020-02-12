const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const passport = require("passport");
const {
    User
} = require('../database')
const validateRegisterInput = require('../validations/register')
const validateUpdateInput = require('../validations/update')
const validateLoginInput = require('../validations/login')
const {
    secretOrKey
} = require("../config/keys");

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    User.findAll({})
        .then(users => {
            if (!users) {
                return res.json("No User Found..");
            }
            res.json(users);
        })
        .catch(err => res.status(404).json(err));
})

// @route   GET /api/users/register
// @desc    Register new user
// @access  Public
router.post('/register', (req, res) => {

    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);

    // Check Validations
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            errors.email = "Email Already Exist...";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            });
            bcrypt.genSalt(12, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.status(200).json(user))
                        .catch(err => console.log(err));
                })
            })

        }
    });
})


// @route   post /api/users/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    // Check Validations
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (!user) {
                errors.email = "No user registred with this email";
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // sign jwt token
                    const payload = {
                        id: user.dataValues.id,
                        firstName: user.dataValues.firstName,
                        lastName: user.dataValues.lastName,
                        email: user.dataValues.email
                    };
                    jwt.sign(payload, secretOrKey, {
                        expiresIn: 86400
                    }, (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            success: true,
                            token: "Bearer " + token,
                        });
                    });
                } else {
                    errors.password = "Incorrect Password";
                    return res.status(400).json(errors);
                }
            });
        })
        .catch(err => console.log(err));
})

// get api/current -> return current user, need authorization
router.get(
    "/current",
    passport.authenticate("jwt", {
        session: false
    }),
    (req, res) => {
        const userData = {
            id: req.user.id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email
        };
        res.status(200).json(userData);
    }
);

// @route   put /api/users/update
// @desc    Update user
// @access  authorized
router.put('/update', passport.authenticate("jwt", {
            session: false
        }), (req, res) => {

    const {
        errors,
        isValid
    } = validateUpdateInput(req.body);

    // Check Validations
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            const newUser = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password
            };
            bcrypt.genSalt(12, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    User.update(newUser, {where: {email: req.body.email} })
                        .then(updatedUser => {
                        console.log(updatedUser);
                                res.status(200).json(updatedUser);
                        })
                })
            })

        } else {
            return res.status(400).json(errors);
        }
    });
})


router.delete('/delete', passport.authenticate("jwt", {
    session: false
}), (req, res) => {

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            User.destroy(
                {
                    where: { email: req.body.email}
                }
            ).then(deletedUser => {
                res.json(deletedUser);
            })

        } else {
            return res.status(400).json("invalid email");
        }
    });
})


module.exports = router;