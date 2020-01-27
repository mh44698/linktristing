const express = require("express")
const router = express.Router()


const User = require("../db/models/User")
const Album = require("../db/models/Album")
const Link = require("../db/models/Link")

router.get("/", (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
})

router.get("/:uname", (req, res) => {
    User.findOne({ username: req.params.uname })
        .then(user => res.json(user))
})

router.post("/", (req, res) => {
    User.create(req.body)
        .then(user => { res.json(user) })
})

router.put("/:id", (res, req) => {
    User.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(user => { res.json(user) })
})

router.delete("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            if (user.albums.length > 0) {
                user.albums.forEach(album => {
                    if (album.links.length > 0) {
                        album.links.forEach(link => {
                            Link.findOneAndDelete({ _id: link._id })
                        })
                    }
                    Album.findOneAndDelete({ _id: album.id })
                })
            }
        })
        .then(user => {
            User.findOneAndDelete({ _id: user._id })
                .then(user => res.json(user))
        })
})

module.exports = router