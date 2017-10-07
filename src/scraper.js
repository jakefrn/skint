var scraperjs = require('scraperjs');

function getEvents(){
   		return scraperjs.StaticScraper
		   .create('https://theskint.com/')
	       .scrape(function($) {
	        return $(".entry-content p").map(function() {
				var eventText =  $(this).html();
				return eventText;
			 
	       }).get();
	    })
    .then(function(data) { 
        return data;
	});    
}

module.exports = {
    getEvents: getEvents
};

 