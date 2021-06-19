// setup web app
var express = require('express')
var app = express()

app.set('view engine','ejs')

var router = express.Router()

router.use(express.static('public'))

var webconfig = require('./webconfig')

function controller(name) {
    return require('./controllers/' + name + '-controller')
}

router.get('/', function(request, reponse){
    controller('home').get(request, reponse)
})

app.use(webconfig.root, router)

// start web app
app.listen(8080, function(){
    console.log('Sever started ok !')
})