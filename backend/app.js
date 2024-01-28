require('dotenv').config()
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')
const todoRouter = require('./routes/todo')
const { connectMongoDb } = require('./connection')
const express = require('express')
const { middleware } = require('./middleware')
const app = express()

const PORT = process.env.PORT || 8000

//Connect mongoBD
connectMongoDb(process.env.MONGO_URI)
  .then(() => console.log("You successfully connected to MongoDB!"))
  .catch((err) => console.log(err, 'mongo error'))


// Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(middleware)
app.use(cors())

// Router
app.use('/api/todo', todoRouter)


// create web server
const server = http.createServer(app)
server.listen(PORT, () => console.log("server started", PORT))