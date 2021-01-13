const express = require('express')
const mongoose = require('mongoose')
const postRoute = require('./routes/posts')
const bodyParser = require('body-parser')

require('dotenv/config')

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use('/posts',postRoute);

// Routes
app.get('/',(req,res) => {
    res.send('Hello world');
});

// app.get('/posts',(req,res) => {
//     res.send('Hello We are at post page');
// });


// app.get('/*',(req,res) => {
//     res.send('404 not found page');
// });
// connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>{
        console.log('DB Connected')
})

// Listener
app.listen(5000)