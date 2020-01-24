
Express Checklist
Setup
 Make a directory for the project
 Run npm init to initialize a Node project in the directory
 Create a .gitignore and add the node_modules
 npm install express
 Create your directory structure mkdir db models controllers
 Create index.js
 Require Express in index.js: const express = require('express')
 Create an instance of an express app: const app = express()
 Make your app listen on a certain port: app.listen(3000, () => console.log("Running on port 3000!"))
Connect to MongoDB
 npm install mongoose
 Create a connection.js file in the db/ directory
 Require mongoose in the connection file
 Connect to your database: mongoose.connect('mongodb://localhost/db_name')
 Set the promise library: mongoose.Promise = Promise if you are using an older Mongoose version than v5.
 Export your setup mongoose: module.exports = mongoose
Define a Schema + Model
 Create a file with your model's name in models/
 Import mongoose from your connection file: const mongoose = require("../db/connection")
 Create your schema and set it to a variable.
const mySchema = new mongoose.Schema({
  field: DataType,
})
 Create a model with your schema: const myModel = mongoose.model("modelName", mySchema)
 Export your model: module.exports = myModel
Seed your DataBase
 Create db/seed.js
 Import your schema from your model file: const myModel = require('../models/myModel')
 Create your seed data in JSON format in db/seeds.json
 Import your seed data into your seeds.js file: const seedData = require("./seeds.json")
 Remove all of the items currently in your database: myModel.remove({})
 Insert your seeds into your database within the .then method.
 Exit the seeding process in another .then method.
myModel.remove({})
  .then(() => {
    return myModel.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
 Run your seed file in the terminal: $ node db/seed.js
Set Up your Controller
 Create a controller file: controllers/myItems.js
 Require your controller in index.js: const myController = require('./controllers/myController')
 Use your controller below any other configuration: app.use("/myUrlPrefix", myControllerController)
 Require Express in your controller file: const express = require("express")
 Create a router instance in your controller file: const router = express.Router()
 Import your model: const myModel = require('../models/myModel')
 Export your router instance at the very bottom of the file: module.exports = router
Create your Index Route
 Setup a GET handler for the '/' route: router.get("/", (req, res) => {})
 In the body of the GET handler, find all of the instances of your model: myModel.find({})
 Once the items are returned from your database, render your index view: res.json(myInstances)
router.get("/", (req, res) => {
  myModel.find({}).then(myInstances => res.json(myInstances))
})
Create your Show Route
 Setup a GET handler for the '/:id' route: router.get("/:id", (req, res) => {})
 In the body of the GET handler, find an instance of your model: myModel.findOne({ _id: req.params.id })
 Once the items are returned from your database, render your index view: res.render('show', { myInstance })
router.get("/:id", (req, res) => {
  myModel.findOne({ _id: req.params.id }).then(myInstance => res.json(myInstance)))
})
Create your New Route
 Install body-parser: $ npm install body-parser

 Require body-parser in your index.js: const parser = require('body-parser')

 Setup body-parser in your index.js: const parser = app.use(parser.urlencoded({ extended: true })) and app.use(parser.json()) note: put this above where you use your controllers!

 Setup a POST handler for your post reqest to create a new item at url /: router.post("/", (req, res) => {})

 In the body of the POST handler, create an instance of your model with the data from the form: myModel.create(req.body)

 Once the items are returned from your database, redirect to your home page: res.redirect('/')

router.post('/', (req, res) => {
  myModel.create(req.body)
    .then(myNewItem => {
      res.redirect('/')
    })
})
Create your Update Route
 Find the item you want to edit in your database: myModel.findOne({_id: req.params.id})
 Render the form: res.render('edit', { myInstance })
 Create a route to edit the item in the database: router.put('/:id', (req, res) => {})
 Find an item in the database and edit it: myModel.findOneandUpdate({_id: req.params.id}, req.body, { new: true })
 Redirect to the home page: res.redirect('/')
router.put('/:id', (req, res) => {
  myModel.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(myInstance => {
      res.redirect('/')
    })
})
Create your Delete Route
 Create your delete route: router.delete(':id', (req, res) => {})
 Remove the item from the database: myModel.findOneAndRemove({ _id: req.params.id })
 Redirect to the home page: res.redirect('/')
router.delete('/:id', (req, res) => {
  myModel.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.redirect('/')
    })
})
CORS
 npm install cors
 add cors to the index.js - const cors = require('cors')
 add the cors middleware - app.use(cors())
