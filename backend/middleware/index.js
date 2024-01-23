
function middleware(req, res, next) {
  console.log("your middleware called")
  next()
}

module.exports = {
  middleware
}