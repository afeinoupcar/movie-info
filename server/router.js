const UserController = require('./controllers/UserController')

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send({
      msg: 'hello world'
    })
  })
  app.post('/users', UserController.register)
  app.get('/users/:id', UserController.getUserById)
  app.put('/users/:id', UserController.update)
  app.delete('/users/:id', UserController.delete)
}
