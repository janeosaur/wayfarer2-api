var databaseUrl = process.env.MONGODB_URI;
mongoose.createConnection(databaseUrl || 'mongodb://localhost/wayfarer2-api')

module.exports.Comment = require('./comments');
module.exports.City = require('./cities')
