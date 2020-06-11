/*
GET: Busca informação
POST: Cria algum tipo de registro
PUT: Edita
DELETE: Deleta
*/

const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('../src/controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;