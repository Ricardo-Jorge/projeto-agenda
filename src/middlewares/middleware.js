exports.middlewareGlobal = (request, response, next) => {
    response.locals.errors = request.flash('errors');
    response.locals.success = request.flash('success');
    response.locals.user = request.session.user;
    next();
};

exports.checkCsrfError = (err, request, response, next) => {
    if(err) {
        return response.render('404');
    }

    next();
};

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}

exports.loginRequired = (request, response, next) => {
    // significa que usuário não está logado.
    if(!request.session.user) {
        request.flash('errors', 'Você precisa fazer o login.');
        request.session.save(()=> response.redirect('/'));
        return;
    }

    next();
}