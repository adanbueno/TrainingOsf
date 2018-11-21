var express = require('express')
var app = express();
var util = require('./JS/util')
var bodyParser   = require('body-parser');  //importando o body-parser
app.set("views", __dirname + "/views")  //Tudo vai estar contido dento da pasta views
app.set("view engine", "ejs");  //extensão das views
app.use(bodyParser.urlencoded({ extended: true }));//é utilizado para setar o url

//Passando o id como parametro e recebendo na função
app.get('/ParouImpar/:id', function(req, res){
    res.send(util.oddOrEven(req.params.id))
})

//Fazendo um numero aleatorio ser impresso na tela
app.get('/random', function(req, res){
    //res.send(functions.random())
    res.render('random',{
        random:util.random() //criando variavel random e atribuindo o valor da função random
    })    
})

app.get('/MenorOrMaior/:number',function(req,res){
        if(req.params.number < 5){
           res.render('number', {
               number:req.params.number
           }) 
        }
        else{
            res.send(req.params.number)
        }
})

app.get('/array',function(req,res){
    res.render('array',{
        array: [1,2,3,4,5,6,7,8,9,10]
    })

})

app.listen(3050,function(){
    console.log("Rodando na posta 3050!!")
})