// Used for setting up connection to mongoDB
module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  URL: process.env.BASE_URL || 'http://localhost:5000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://yael:canada27@cluster0-zs7rt.mongodb.net/Test?retryWrites=true&w=majority'
}