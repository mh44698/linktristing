const express = require("express")
const router = express.Router()


const User = require("../db/models/user-model")
const Collection = require("../db/models/collection-model")
const Link = require("../db/models/link-model")

router.get("/", (req, res) => {
    Link.find().then(links => {
        res.json(links)
    })
})

router.get("/:id", (req, res) => {
    Link.findOne({ _id: req.params.id })
        .then(link => res.json(link))
})

router.get("/s/:id", (req, res) => {
    Link.find({ parent: req.params.id })
        .then(links => res.json(links))
})

router.post("/:id", (req, res) => {
    Link.create(req.body)
        .then(link => {
            Collection.findOne({ _id: req.params.id })
                .then(collection => {
                    collection.linklist.push(link._id)
                    collection.save()
                    link.parent = collection._id
                    link.save()
                        .then(collection => { res.json(collection) })
                })
        })
})

router.put("/:id", (req, res) => {
    Link.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(link => { res.json(link) })
})

router.delete("/:id", (req, res) => {
    Link.findOneAndDelete({ _id: req.params.id })
        .then(link => {
            Collection.findOne({ _id: link.parent })
                .then(collection => {
                    let loc = collection.linklist.indexOf(collection._id)
                    collection.linklist.splice(loc, 1)
                    collection.save()
                })
        })
        .then(link => res.json(link))
        .catch((err) => console.log(err))
})


module.exports = router