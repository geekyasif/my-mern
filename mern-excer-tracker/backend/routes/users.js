const express = require('express');
const User = require('../models/user.model');

const router = express.Router()


// route for getting all the users
router.route('/').get( (req, res) => {
    User.find()
    .then( users => res.json(users) )
    .catch(err => res.status(400).json('Error:' + err))
})


// route for adding all the users
router.route('/add').post( (req, res) => {
    
    console.log(req.body)
    const newUser = new User({
        username : req.body.username
    })

    newUser.save()
    .then( () => res.json('User added successfully !'))
    .catch( err =>  res.status(400).json("Error: " + err) )
})

module.exports = router