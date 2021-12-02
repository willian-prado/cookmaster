const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('../controller/users/router');
const errorHandler = require('../middlewares/errorHandler');
const login = require('../controller/login/login');

const app = express();

app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
app.use('/users', usersRouter);
app.post('/login', login);
// Não remover esse end-point, ele é necessário para o avaliador

app.use(errorHandler);

module.exports = app;