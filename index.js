var express = require('express');
var server  = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const glob = require('glob');

var rsvpRouter = require('./routers/rsvp.router');

var port = process.env.PORT || 8090;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;

server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

//Connect to the database
mongoose.connect(mongoURI);

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.get('/image-gallery', function(req, res){
  glob('./public/images/image-gallery/*.jpg', function(err, files){
    if(err){
      res.status(500).json({
        msg:'Your stuff is broke'
      });
    }
    const images = files.map(function(file){
      return file.slice(9);
    });
    res.status(200).json({
      images: images
    })
  });
});

server.use(rsvpRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
