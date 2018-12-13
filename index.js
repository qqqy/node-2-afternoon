const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const {PORT , CONNECTION_STRING} = process.env
const app = express()
const writeCtrl = require('./controllers/writeDataController')
app.use(bodyParser.json())

app.post('/api/create_product' , writeCtrl.create_product)

massive(CONNECTION_STRING).then(connection => {
  app.set('db' , connection)
  app.listen(PORT, () => console.log("Now listening on " + PORT))
}).catch(err => res.status(400).send(err.message))