const router = require('express').Router()
const Item  = require('../models/item.model')


// getting all items
router.get('/', (req, res) => {
    Item.find()
    .sort({date :-1})
    .then(items => res.json(items))
    .catch( err => console.error(err))
})


router.post('/add', (req, res) => {
    const newItem = new Item({
        item : req.body.item
    })

    newItem.save()
    .then( item => res.json(item))
})


router.delete("/delete/:id", (req,res) => {
    Item.findByIdAndDelete(req.params.id)
    .then( item =>  item.remove().then( () => res.json({success: true})))
    .catch(error => res.status((400).json({success: false})))
})
module.exports = router