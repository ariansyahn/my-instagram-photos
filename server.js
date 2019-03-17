var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

//set view engine to ejs
app.set('view engine', 'ejs');


// configure instagram app with your access_token
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: 'ACCESS TOKEN',
});


// configure instagram app with your access token
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function (req, res) {
    // use the instagram package to get popular media
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        // render the home page and pass in the popular images
        res.render('pages/index', {
            grams: medias
        });
    });
});

//start the server
app.listen(8080);
console.log('App Started! Look at localhost');