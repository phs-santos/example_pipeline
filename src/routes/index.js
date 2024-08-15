const routes        = require('express').Router();
const UserRoutes    = require('./User');

routes.get('/', (req, res) => res.status(200).send('Hello World!'))
routes.use('/users', UserRoutes);

module.exports = routes