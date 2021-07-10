var session = require('./session')

exports.get = function(request, reponse, webconfig, model) {
    var logged = session.logged(request)
    reponse.render('home', {
        root    : '',
        logged  : logged
    })
}