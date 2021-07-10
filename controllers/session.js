exports.logged = function(request){
    return request.cookies.logged ? true : false
}

exports.setLogged = function(reponse){
    reponse.cookie('logged', true)
}

exports.clear = function(reponse){
    reponse.clearCookie('logged')
}