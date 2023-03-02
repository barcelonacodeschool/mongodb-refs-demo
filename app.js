const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    wordsRoute = require('./routes/wordsRoutes')
    languagesRoute = require('./routes/languagesRoutes.js')

// to print incoming requests from mongoose in the terminal
mongoose.set('debug',true)
// =================== setting to use the body of a request ===================
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// connecting to mongo and checking if DB is running
async function connecting(){
try {
    await mongoose.connect('mongodb://127.0.0.1/testrefcollections')
    console.log('Connected to the DB')
} catch ( error ) {
    console.log('ERROR: Seems like your DB is not running, please start it up !!!');
}
}
connecting()
// end of connecting to mongo and checking if DB is running

// routes
app.use('/words', wordsRoute);
app.use('/languages', languagesRoute);
// Set the server to listen on port 4000
app.listen(4000, () => console.log(`listening on port 4000`))