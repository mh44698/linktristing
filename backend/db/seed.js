const mongoose = require('./connection')
const User = require('./models/user-model')
const Collection = require('./models/collection-model')
const Link = require('./models/link-model')
const usersRaw = require('./user/user-seed.json')
const collectionsRaw = require('./collection/collection-seed.json')
const linksRaw = require('./link/link-seed.json')


function seedOne(i) {
  User.create(usersRaw[i])
    .then(user => {
      Collection.create(collectionsRaw[i])
        .then(collection => {
          Link.create(linksRaw[i])
            .then(link => {
              collection.linklist.push(link._id)
              collection.save()
            })
            .then(() => {
              user.collections.push(collection._id)
              user.save()
            })
            .then(() => {
              console.log("Created ", user)
            })
        })
    })
}

console.log("Started")

Link.deleteMany({}, function (err) {
  if (err) { console.log(err) }
  else { console.log("Deleted Links") }
})
  .then(() => {
    Collection.deleteMany({}, function (err) {
      if (err) { console.log(err) }
      else { console.log("Deleted Collections") }
    })
  })
  .then(() => {
    User.deleteMany({}, function (err) {
      if (err) { console.log(err) }
      else { console.log("Deleted Users") }
    })
  })
  .then(() => {
    for (i = 0; i < 3; i++) {
      seedOne(i)
    }
  })