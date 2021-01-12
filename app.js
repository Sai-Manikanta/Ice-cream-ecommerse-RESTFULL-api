const express = require('express');

const app = express();

app.get('/api/ice-creams', (req, res) => {
    res.send('Ice creams Get')
})

app.post('/api/ice-creams', (req, res) => {
    res.send('Ice creams Post')
})

app.delete('/api/ice-creams/:id', (req, res) => {
    res.send(`Delete ice creams ${req.params.id}`)
})

app.put('/api/ice-creams/:id', (req, res) => {
    res.send(`Update ice creams ${req.params.id}`)
})

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listen to port ${port}`);
})