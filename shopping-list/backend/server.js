const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const itemModel = require('./models/item.model')
const itemRouter = require('./routes/item.route')

const app = express()
const port = process.env.PORT || 5000



mongoose.connect('mongodb://localhost/shopping-list', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Connection error !'))
db.once('open', () => console.log('connected successfully to the server'))


// middleware
app.use(cors());
app.use(express.json())
app.use('/items', itemRouter)

app.listen(port, () => {
    console.log("Server is ruuning on port : " + port)
})