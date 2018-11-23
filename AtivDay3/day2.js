const express = require('express');
const request = require('request');
let bodyParser   = require('body-parser');
let app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    request('https://reqres.in/api/users?page=2', function (error, response, body) {
    res.render('users',{
      users:body
    });
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
});


app.get('/', function(req, res){
  request('https://reqres.in/api/users/2', function (error, response, body){
    res.render('route2',{
      route2:body
    })
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  });
});

app.get('/', function(req, res){
  request('https://reqres.in/api/users/23', function (error, response, body){
    res.render('route3',{
      route3:body
    })
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  });
});

app.get('/', function(req, res){
  request('https://reqres.in/api/unknown', function (error, response, body){
    res.render('route4',{
      route4:body
    })
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  });
});

app.get('/forms',function(req,res){
  res.render('homePage');
})

app.post('/test', function(req,res){
  var postData= req.body;
  
  request.post({
      uri:"https://reqres.in/api/users",
      headers:{'content-type': 'application/x-www-form-urlencoded'},
      body:require('querystring').stringify(postData)
      },
      function(err,response,body){
          console.log(body);
          console.log(response.statusCode);
          res.send(body)
  });
});


app.listen(8002, function () {
  console.log('Example app listening on port 8002!');
});