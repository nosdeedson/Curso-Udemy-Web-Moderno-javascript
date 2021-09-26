module.exports = app => {
    app.get('/', (req, res ) => {res.send("HOME")})
    app.post('/users', app.api.user.save)
    app.put('/users/:id', app.api.user.save)
    app.get('/users', app.api.user.get)
}