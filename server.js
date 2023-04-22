const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

// above code is referencing this code in index.js
// const rountes = require('express').Router();
// rountes.get('/', (reg, res, next) =>{
//     reg.json('Awesome person');
// });

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});

