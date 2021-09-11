const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: String,
        require : true,
    },
    description:{
        type: String,
        require: true
    },
    duration:{
        type: Number,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise