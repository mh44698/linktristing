const express = require("express")
const router = express.Router()


const User = require("../db/models/user-model")
const Collection = require("../db/models/collection-model")
const Link = require("../db/models/link-model")

router.get("/", (req, res) => {
    Collection.find().then(collections => {
        res.json(collections)
    })
})

router.get("/:id", (req, res) => {
    Collection.findOne({ _id: req.params.id })
        .then(collection => res.json(collection))
})

router.post("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            Collection.create(req.body)
                .then(collection => {
                    user.collections.push(collection._id)
                    user.save()
                })
        })
        .then(user => { res.json(user) })
})

router.put("/:id", (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(collection => { res.json(collection) })
})

router.delete("/:id", (req, res) => {
    Collection.findOne({ _id: req.params.id })
        .then(collection => {
            if (collection.links.length > 0) {
                collection.links.forEach(link => {
                    Link.findOneAndDelete({ _id: link._id })
                })
            }
        })
        .then(collection => {
            Collection.findOneAndDelete({ _id: req.params.id })
                .then(collection => res.json(collection))
        })
})


module.exports = router