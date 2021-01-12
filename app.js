const express = require('express');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost/ice_creams_ecomerse', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('connected to Database')
}).catch(err => {
    console.log(`Error while connected to mongoDB: ${err}`)
})

// api routes
const iceCreamsRoutes = require('./routes/iceCreams');

app.use('/api/ice-creams',iceCreamsRoutes);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listen to port ${port}`);
})