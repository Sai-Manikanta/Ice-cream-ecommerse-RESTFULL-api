const express = require('express');

const app = express();

const iceCreamsRoutes = require('./routes/iceCreams');

app.use('/api/ice-creams',iceCreamsRoutes);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listen to port ${port}`);
})