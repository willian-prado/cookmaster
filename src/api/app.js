const express = require('express');
const path = require('path');
// const { resolve } = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('../controller/users/router');
const recipesRouter = require('../controller/recipes/router');
const errorHandler = require('../middlewares/errorHandler');
const login = require('../controller/login/login');

const app = express();

app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => response.send());
// Não remover esse end-point, ele é necessário para o avaliador
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.post('/login', login);
app.use('/images/', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errorHandler);

module.exports = app;