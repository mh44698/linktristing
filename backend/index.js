const express = require('express')
const app = express()

const parser = require("body-parser");
const cors = require("cors");
const albumController = require("./controllers/album")
const userController = require("./controllers/user")
const linkController = require("./controllers/link")



app.use(cors());

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("/user");
});

app.use("/api/user", userController)
app.use("/api/album", albumController)
app.use("/api/link", linkController)

app.listen(4000, () => {
    console.log('App is listening on port 4000')
});