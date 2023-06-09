const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

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

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});