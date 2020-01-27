const mongoose = require('./connection')
const Users = require('./data-model/user-model')
const Albums = require('./data-model/album-model')
const Link = require('./data-model/link-model')
const usersRaw = require('./user/user-seed.json')
const albumsRaw = require('./album/album-seed.json')
const linksRaw = require('./link/link-seed.json')

Albums.remove({}).then(albums => {
  Albums.collection
    .insert(albumsRaw)
    .catch(err => console.log(err))
})

Link.remove({}).then(links => {
  Link.collection
    .insert(linksRaw)
    .catch(err => console.log(err))
})

Users.remove({}).then(users => {
  Users.collection
    .insert(usersRaw)
    .catch(err => console.log(err))
})