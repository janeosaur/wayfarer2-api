Deployed link: https://wayfarer2-api.herokuapp.com/api

Procfile, .gitignore

@server.js

heroku config env variables: https://devcenter.heroku.com/articles/mongolab
mongo url: https://mlab.com/databases

    var databaseUrl = process.env.MONGODB_URI;
    mongoose.createConnection(databaseUrl || 'mongodb://localhost/wayfarer2-api')

set port
    
    app.listen(process.env.PORT || 3001, function() {
      console.log('api running on port 3001');
    });
