const express = require('express');
const bodyParser = require('body-parser');
//stretch assignment
// const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
//stretch assignment
// const professionalRoutes = require('./routes/professional');

//listening to decide what "door" render wants to use, or use port 8080, or any port that isn't already in use.
const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
