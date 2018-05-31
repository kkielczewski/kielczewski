const Koa = require('koa');
const mongoose = require('mongoose');
const logger = require('koa-logger');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const send = require('koa-send');
const routes = require('./routes');
const config = require('./config');
const path = require('path');

// Make mongoose use native ES6 promises
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(config.database.url, config.database.opts);

// Koa
const app = new Koa()
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(routes)
  .use(serve(path.join(__dirname, '/client/dist')))
  .use(function* index() {
    yield send(this, '/client/dist/index.html');
  });

const server = app.listen(config.server.port);

module.exports = server;

/*
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

// Create link to React build directory
var distDir = __dirname + "/client/dist/";
app.use(express.static(distDir));

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test").then(
  () => { },
  err => {
    console.log(err);
    process.exit(1);
  }
);

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */
/*
app.get("/api/contacts", function(req, res) {
  mongoose.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
      console.log('Dupsko');
    }
  });
});

app.post("/api/contacts", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  mongoose.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
      console.log('Dupsko');
    }
  });
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */
/*
app.get("/api/contacts/:id", function(req, res) {
  mongoose.collection(CONTACTS_COLLECTION)
  .findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get contact");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/contacts/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  mongoose.collection(CONTACTS_COLLECTION)
  .updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update contact");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/contacts/:id", function(req, res) {
  mongoose.collection(CONTACTS_COLLECTION)
  .deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete contact");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
*/
