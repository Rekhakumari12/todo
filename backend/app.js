require('dotenv').config()

const http = require('http')
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
app.use(express.urlencoded({ extended: false }))
app.use(middleware)


// Router
app.use('/todo', todoRouter)


// create web server
const server = http.createServer(app)
server.listen(PORT, () => console.log("server started", PORT))