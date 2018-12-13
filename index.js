const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const {PORT , CONNECTION_STRING} = process.env
const app = express()
app.use(bodyParser.json())

app.get('/api/initalget' , (req, res) => {
  console.log("hit")
  res.sendStatus(200)
})

massive(CONNECTION_STRING).then(connection => {
  app.set('db' , connection)
  app.listen(PORT, () => console.log("Now listening on " + PORT))
}).catch(err => res.status(400).send(err.message))