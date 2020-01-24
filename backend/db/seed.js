const mongoose = require('./connection')
const Users = require('../data-model/user-model')
const Albums = require('../data-model/album-model')
const Lists = require('../data-model/list-model')
const usersRaw = require('./seed.json')
const albumsRaw = require('./seed.json')
const listsRaw = require('./seed.json')

Albums.remove({}).then(albums => {
  Albums.collection
    .insert(albumsRaw)
    .catch(err => console.log(err))
})