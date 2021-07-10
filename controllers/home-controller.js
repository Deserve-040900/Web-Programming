var session = require('./session')

exports.get = function(request, reponse, webconfig, model) {
    var logged = session.logged(request)
    model.getGeneralInfo(function(generalInfo){
        reponse.render('home', {
            root        : '',
            logged      : logged,
            generalInfo : generalInfo
        })
    })
}