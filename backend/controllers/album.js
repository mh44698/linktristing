const express = require("express")
const router = express.Router()


const User = require("../db/models/User")
const Album = require("../db/models/Album")
const Link = require("../db/models/Link")

router.get("/", (req, res) => {
    Album.find().then(albums => {
        res.json(albums)
    })
})

router.get("/:id", (req, res) => {
    Album.findOne({ _id: req.params.id })
        .then(album => res.json(album))
})

router.post("/:id", (req, res) => {
    Album.create(req.body)
        .then(album => {
            User.findOne({ _id: req.params.id })
        })
        .then(user => {
            user.albums.push(album._id)
            user.save()
        })
        .then(user => { res.json(user) })
})

router.put("/:id", (res, req) => {
    Album.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(album => { res.json(album) })
})

router.delete("/:id", (req, res) => {
    Album.findOne({ _id: req.params.id })
        .then(album => {
            if (album.links.length > 0) {
                album.links.forEach(link => {
                    Link.findOneAndDelete({ _id: link._id })
                })
            }
        })
        .then(album => {
            Album.findOneAndDelete({ _id: req.params.id })
                .then(album => res.json(album))
        })
})


module.exports = router