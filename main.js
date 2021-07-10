var datasource = require('./dataSource/simple-datasource')
var model = require('./model/model').create(datasource)

// setup web app
var express = require('express')
var app = express()

app.set('view engine','ejs')
app.set(require('cookie-parser')())

var router = express.Router()
router.use(express.static('public'))
var webconfig = require('./webconfig')
var urlencodedparser = require('body-parser').urlencoded({ extended: false })

function controller(name) {
    return require('./controllers/' + name + '-controller')
}

router.get('/', function(request, reponse){
    controller('home').get(request, reponse, webconfig, model)
})

router.get('/login', function(request, reponse){
    controller('login').get(request, reponse, webconfig, model)
})

router.post('/login', urlencodedparser, function(request, reponse){
    controller('login').post(request, reponse, webconfig, model)
})

router.get('/logout', function(request, reponse){
    controller('logout').get(request, reponse, webconfig)
})

app.use(webconfig.root, router)

// start web app
app.listen(8080, function(){
    console.log('Sever started ok !')
})