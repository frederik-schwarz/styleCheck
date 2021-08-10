
const express = require('express')

const db = require('../db/dbFuncs')

const router = express.Router()

//write your get post patch del and other routes here 
router.get('/', (req, res) => {
    db.getAllItems()
    .then(item => {
        res.json(item)
    })
})
router.get('/basket', (req, res) => {
    db.getAllBasket()
    .then(items => {
        res.json(items)
    })
})
router.post('/', (req, res) => {
    db.postNewListing(req.body)
    .then(item => {
        res.json(item)
    })
})
router.post('/basket', (req,res) => {
    db.AddListingBasket(req.body)
    .then(item => {
        res.json(item)
    })
})
router.delete('/:id', (req,res) => {
    db.deleteLisitng(req.params.id)
    .then(item => {
        res.json(item)
    })
})
router.delete('/basket/:id', (req,res) => {
    db.deletefromBasket(req.params.id)
    .then(
        item => {
            res.json(item)
        }
    )
})
router.patch('/:id', (req,res) => {
    db.updateSalesItems(req.params.id, req.body)
    .then(item => {
        res.json(item)
    })
})
module.exports = router