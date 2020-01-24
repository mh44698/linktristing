const express = require("express")
const router = express.Router()


const User = require("../db/models/User")
// const Album = require("../db/models/Album")
// const Link = require("../db/models/Link")

router.get("/", (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
})

router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
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
    User.findOneAndDelete({ _id: req.params.id })
        .then(user => res.json(deleted))
})

module.exports = router