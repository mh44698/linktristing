const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoAlbum = "mongodb://localhost/link-trist/album";

mongoose
  .connect(mongoAlbum, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;


mongoose.Promise = Promise;

const mongoLink = "mongodb://localhost/link-trist/link";

mongoose
  .connect(mongoLink, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

// module.exports = mongoose;


mongoose.Promise = Promise;

const mongo = "mongodb://localhost/link-trist/user";

mongoose
  .connect(mongo, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose;