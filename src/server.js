'use strict';

const express = require('express');
const cors = require('cors');
const foodRouter =require('./routes/food')
const clothesRouter=require('./routes/clothes')
const page404=require('./error-handlers/404')
const page500 =require('./error-handlers/500')
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('home')
  res.status(200).json({
    message: 'Home page '
  })
})
app.use(foodRouter)
app.use(clothesRouter)


function start(port) {
    app.listen(port, () => console.log(`running on PORT: ${port}`));
  }
  
 app.use('*' , page404)
app.use(page500)
  module.exports = {
    start,
    app
  }
