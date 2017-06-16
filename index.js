var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var daanish = {
   name: "Daanish Nasir",
   rating: 11,
   birth_year: 2015,
   favorite_food: "Chicken fried steak for $5"
}

app.use(express.static(__dirname + '/public'))
// app.get('/', function(req, res, next) {
//    res.sendFile(__dirname + '/public/index.html')
// })

app.use(bodyParser.json())
app.get('/daanish', function(req, res, next) {
   console.log(req.params)
   console.log(req.query)
   res.send(daanish)
})

app.post('/daanish', function(req, res, next) {
   console.log(req.body)
   daanish.hometown = req.body.hometown;
   res.send(daanish)
})


app.listen(3000)
