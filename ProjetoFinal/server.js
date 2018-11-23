//const http = require('http');
const express = require('express');
const app = express();
const request = require('request');
//const util = require('./js/util');
var bodyParser = require('body-parser');  //importando o body-parser
app.set("views", __dirname + "/views");  //Tudo vai estar contido dento da pasta views
app.set("view engine", "ejs");  //extensão das views
app.use(bodyParser.urlencoded({ extended: true }));//é utilizado para setar o url
app.use(express.static(__dirname + '/public'));
// Listing contacts → /contacts
app.get('/contacts', function (req, res) {
    console.log('/contacts ====');

    request.get('https://cryptic-retreat-41638.herokuapp.com/api/contacts', { json: true },
        function (err, body) {
            if (err) {
                console.log('err');

                return 'Come back later'
            } else {
                console.log('deu bom');
                console.log(body.body.data);
                let data = body.body.data;
                let isServerUp = true;
                if (!data) {
                    data = [];
                    isServerUp = false;
                }
                res.render('listPage', {
                    contacts: data,
                    isServerUp: isServerUp
                })
            }
        })

})

app.get("/registerPage", function (req, res) {
    res.render('registerPage')
})

// Register a contact → /contacts
app.post('/contacts', function (req, res) {
    request.post({
        url: 'https://cryptic-retreat-41638.herokuapp.com/api/contacts',
        form: {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phone: `${req.body.phone}`,
            gender: `${req.body.gender}`
        }
    }, function (err, response, body) {
        res.send(body.body)
        
    })
})

// Update a contact → /contacts:id
app.post('/contacts/:id', function (req, res) {
    console.log(`${req.body.id}`)
    request.put({
        url: 'https://cryptic-retreat-41638.herokuapp.com/api/contacts' + req.params.id,
        form: {
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            phone: `${req.body.phone}`,
            gender: `${req.body.gender}`
        }
    }, function (err, response, body) {
        res.send(body.body)
        res.redirect('/')
    })
})

// Delete a contact → /contacts/:id
app.delete('/contacts/:id', function (req, res) {
    request.delete('https://cryptic-retreat-41638.herokuapp.com/api/contacts/' + req.params.id, { json: true }, function (err, body) {
        if (err) { return console.log(err) }
        console.log(JSON.stringify(body.body))
        res.send(JSON.stringify(body.body))
    })
})

// Get a contact → /contacts/:id
app.get('/contacts/:id', function (req, res) {
    console.log('/contacts/:id');
    console.log(req.params.id);

    request.get('https://cryptic-retreat-41638.herokuapp.com/api/contacts/' + req.params.id
        , { json: true },
        function (err, body) {
            if (err) { return console.log(err) }
            console.log(body.body.data);
            res.send(JSON.stringify(body.body.data))
            res.render('SearchPage',{
            contact: body.data.data
            })
        })
})

app.get("/searchPage", function (req, res) {
    res.render('searchPage')
})


app.listen(8000, function () {
    console.log("Rodando na porta 8000!!")
});