var session = require('./session')

exports.get = function(request, reponse, webconfig, model) {
    if(!session.logged(request)){
        reponse.redirect(webconfig.root)
        return
    }

    model.deleteProduct(request.query.id, function(err){
        reponse.redirect(webconfig.root + '#products')
    })
}