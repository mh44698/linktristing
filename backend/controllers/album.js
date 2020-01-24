const express = require("express")
const router = express.Router()


const User = require("../db/models/User")
const Album = require("../db/models/Album")
// const Link = require("../db/models/Link")

router.get("/", (req, res) => {
    Album.find().then(albums => {
        res.json(albums)
    })
})

router.get("/:id", (req, res) => {
    Album.findOne({ _id: req.params.id })
        .then(album => res.json(album))
})

router.post("/new/:id", (req, res) => {
    Album.create(req.body)
        .then(album => {
            User.findOne({ _id: req.params.id })
        })
        .then(user => {
            user.albums.push(album._id)
        })
        .then(user => { res.json(user) })
})

router.put("/:id", (res, req) => {
    Album.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(album => { res.json(album) })
})

router.delete("/:id", (req, res) => {
    Album.findOneAndDelete({ _id: req.params.id })
        .then(album => res.json(deleted))
})


module.exports = router