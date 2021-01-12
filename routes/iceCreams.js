const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Ice creams Get')
})

router.post('/', (req, res) => {
    res.send('Ice creams Post')
})

router.delete('/:id', (req, res) => {
    res.send(`Delete ice creams ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update ice creams ${req.params.id}`)
})

module.exports = router;