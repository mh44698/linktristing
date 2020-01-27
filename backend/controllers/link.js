const express = require("express")
const router = express.Router()


const User = require("../db/models/User")
const Album = require("../db/models/Album")
const Link = require("../db/models/Link")

router.get("/", (req, res) => {
    User.find().then(Users => {
        res.json(users)
    })
})

router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
})

router.post("/:id", (req, res) => {
    Link.create(req.body)
        .then(link => {
            Album.findOne({ _id: req.params.id })
        })
        .then(album => {
            album.links.push(link._id)
            album.save()
        })
        .then(album => { res.json(album) })
})

router.put("/:id", (res, req) => {
    Link.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(link => { res.json(link) })
})

router.delete("/:id", (req, res) => {
    Link.findOneAndDelete({ _id: req.params.id })
        .then(link => res.json(link))
})


module.exports = router