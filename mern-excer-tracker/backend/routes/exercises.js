const express = require('express');
const Exercise = require('../models/exercise.model');

const router = express.Router()


// route for getting all the users
router.route('/').get( (req, res) => {
    Exercise.find()
    .then( exercises => res.json(exercises) )
    .catch(err => res.status(400).json('Error:' + err))
})


// route for adding all the users
router.route('/add').post( (req, res) => {

    console.log(req.body)

    const newExercise = new Exercise({
        username : req.body.username,
        description : req.body.description,
        duration : req.body.duration,
        date : req.body.date
    })

    newExercise.save()
    .then( () => res.json('User added successfully !'))
    .catch( err =>  res.status(400).json("Error: " + err) )
})

module.exports = router