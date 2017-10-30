var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var config = require('./config');
var apiController = require('./controllers/apiController');
var setupController = require('./controllers/setupController');

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getConnectionString(), {useMongoClient: true },function(){
    console.log("Connected Mongo DB");
});

setupController(app);
apiController(app);


app.listen(port, function(){
    console.log("Server running on port 3000 ...");
});