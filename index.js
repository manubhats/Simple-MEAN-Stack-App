var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

// public directory has the angularjs controller
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/movieDB', 
	function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
  }
});

//Mongoose schema
var movJson = {
      "fields":{
         "directors":[{"type":"String"}],
         "release_date":{"type":"String"},
         "rating":{"type":"Number"},
         "genres":[{"type":"String"}],
         "image_url":{"type":"String"},
         "plot":{"type":"String"},
         "title":{"type":"String"},
         "rank":{"type":"Number"},
         "running_time_secs":{"type":"Number"},
         "actors":[{"type":"String"}],
         "year":{"type":"Number"}
      },
      "id":{"type":"Number"},
      "type":{"type":"Number"}
      };

var movSchema = mongoose.model('movies',movJson);

app.get('/', function(request, response) {
  response.render('index');
});
id_temp = 0;

app.get("/movieObject",function(req,res)
{  
//Extracting rank from get request
  rank = req.query.rank;

  var query = movSchema.find({'fields.rating':{$exists:true},
    'fields.year':{$exists:true}, 'fields.rank': {$gt: rank}});
  query.sort([['fields.rank', 1]]);
  query.limit(1);
  query.exec(function(err,mov)
    {
        if(err)
        {
            console.log("Failed");
        }else
        {
            console.log("Fetched");        
        }
        res.json(mov);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
