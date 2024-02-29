const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 3006

mongoose.connect('mongodb://localhost:27017/studb9', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log("Connected to Database");
})

.catch((error) => {
    console.error("Error in Connecting Database", error);
})

app.listen(port,() => {
    console.log(`Listening to Port http://localhost:${port}`);
})