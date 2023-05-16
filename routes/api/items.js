const express = require('express')
const router = express.Router()

//Item Model
const Item = require('../../models/Item')

//@route GET api/items
//@desc Get All Items
//@access Public
router.get('/', (req, res)=>{
    Item.find()
        .sort({date:-1})
        .then(item=>res.json(item))
})

//@route POST api/items
//@desc POST Items
//@access Public
router.post('/', (req, res)=>{
    const newItem= new Item({
        name: req.body.name
    })

    newItem.save()
        .then(item=>res.json(item))

})

//@route DELETE api/items
//@desc DELETE Items
//@access Public
router.delete('/:id', (req, res)=>{
    Item.findById(req.params.id)
        .then(item=>item.deleteOne().then(()=>res.send(`${item}`)))
        .catch(err=>res.status(400).send(`${err}`))
})


module.exports = router