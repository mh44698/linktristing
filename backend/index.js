const express = require('express')
const app = express()

const parser = require("body-parser");
const cors = require("cors");
const collectionController = require("./controllers/collection")
const userController = require("./controllers/user")
const linkController = require("./controllers/link")



app.use(cors());

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => {
    res.redirect("/api/user");
});

app.use("/api/user", userController)
app.use("/api/collection", collectionController)
app.use("/api/link", linkController)

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
});

// app.listen(4000, () => {
//     console.log('App is listening on port 4000')
// });