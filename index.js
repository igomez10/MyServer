const express = require('express');
const app = express();
var qs = require('querystring');
var bodyParser = require('body-parser');


var users = [
  {
    "name": "Ignacio",
    "lastName": "Gomez",
    "username": 'igomeza',
    "mail": 'i.gomez10@uniandes.edu.co',
    "birthday": "02/07/1994"
  },
  {
    "name": "Daniel",
    "lastName": "Gonzalez",
    "username": 'dgonzalez',
    "mail": "danielgonzalez@uniandes.edu.co",
    "birthday": "07/05/1997"
  },
  {
    "name": "Ana",
    "lastNaem": "Arboleda",
    "username": 'arboledanac',
    "mail": 'arboledanac@uniandes.edu.co',
    "birthday": "06/11/1986"
  },
];

var oldText = 'esta es una nota pequeña';


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function (req, res) {
  res.sendfile('register.html');
  console.log('request of /')
})

app.get('/yo', function (req, res) {
  res.send('yo');
})

app.get('/yo/user', function (req, res) {
  console.log('body: ' + req.body);
  console.log('param: ' + req.param('name'));
  res.send('server response')
})

app.post("/yo/user", function (req, res) {
  console.log(req.body.user)
  res.send('aloha')
});

app.get('/users', function (req, res) {
  console.log('request users');
  res.send(users);
});

app.get('/users/:username', function (req, res) {
  console.log(req.params.username);
  res.send(req.params.username);

});

app.post('/users/:username', function (req, res) {
  console.log('new user' + req.params.username);
  newUser = req.body.user;
  console.log(newUser);
  users.push(newUser);
  res.send(users);
})

app.get('/docs', function (req, res) {
  res.sendfile('docs.html');
})

app.get('/docs/oldText', function (req, res) {
  res.send(oldText);

})

app.post('/docs/newText', function(req, res){
   oldText = oldText +" "+  req.body.oldText;
   res.send(oldText);
   console.log(oldText);
})