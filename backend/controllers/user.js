const express = require("express")
const router = express.Router()


const User = require("../db/models/user-model")
const Collection = require("../db/models/collection-model")
const Link = require("../db/models/link-model")

router.get("/", (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
})

router.get("/name/:uname", (req, res) => {
    User.findOne({ username: req.params.uname })
        .then(user => res.json(user))
})

router.post("/", (req, res) => {
    User.create(req.body)
        .then(user => { res.json(user) })
})

router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(user => { res.json(user) })
})

router.delete("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            if (user.collections.length > 0) {
                user.collections.forEach(collection => {
                    if (collection.links.length > 0) {
                        collection.links.forEach(link => {
                            Link.findOneAndDelete({ _id: link._id })
                        })
                    }
                    Collection.findOneAndDelete({ _id: collection._id })
                })
            }
            return user
        })
        .then((user) => {
            User.findOneAndDelete({ _id: user._id })
                .then(user => res.json(user))
        })
})

module.exports = router