const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true
    },
    date:{
        default : Date.now,
        type: Date
    }
})


module.exports = mongoose.model('Item', itemSchema)