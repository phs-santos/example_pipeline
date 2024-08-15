const UserRoutes = require('express').Router();
const UserController = require('../../controllers/User');

UserRoutes.post('/create', UserController.post);
UserRoutes.get('/', UserController.getAll);

module.exports = UserRoutes;