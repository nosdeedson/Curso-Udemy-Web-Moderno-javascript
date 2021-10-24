const admin = require('../config/admin')
module.exports = app => {
    app.get('/', (req, res ) => {res.send("HOME")})


    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(app.api.user.get)
    
    app.route('/users/encontrar-por-email')
        .get(app.api.user.getByEmail)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))


    app.route('/categories')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.categories.save))
        .get(admin(app.api.categories.get))
        
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.categories.getTree)
    
    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .delete(admin(app.api.categories.remove))
        .put(admin(app.api.categories.save))
        .get(app.api.categories.getById)

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.articles.getByCategory)

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.articles.save))
        .get(admin(app.api.articles.get))
    
    app.route("/articles/:id")
        .all(app.config.passport.authenticate())
        .put(admin(app.api.articles.save))
        .delete(admin(app.api.articles.remove))
        .get(app.api.articles.getById)
    
    app.route("/stats")
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)
}