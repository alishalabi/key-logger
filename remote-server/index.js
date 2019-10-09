const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || "3000";

const apiRoutes = require("./api-routes")


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/key-logger', { useNewUrlParser: true});

var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
