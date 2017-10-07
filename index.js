var scraperModule = require('./src/scraper');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); 


var eventsArray = scraperModule.getEvents();
  
  
app.set('port', process.env.PORT || 3000);
  
 
app.get('/', function(req, res) {
  scraperModule
    .getEvents()
    .then(eventsArray => res.render('index.ejs', {data : eventsArray }));
});



app.listen(app.get('port'), function(){
	console.log("express started")
});

