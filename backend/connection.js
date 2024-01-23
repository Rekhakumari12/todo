const mongoose = require('mongoose')
//Connect mongoBD

async function connectMongoDb(uri) {
  return mongoose.connect(uri)
}

module.exports = {
  connectMongoDb
}
