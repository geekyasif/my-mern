const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exercisesRoute = require('./routes/exercises')
const usersRoute = require('./routes/users')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

// connecting to databse using mongoose
const uri = process.env.db_url
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected successfully') )


// middlewares
app.use(cors());
app.use(express.json())

// using our routes 
app.use("/exercises", exercisesRoute)
app.use("/users", usersRoute)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})