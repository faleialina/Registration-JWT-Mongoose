const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');
const routeUser = require('./controller/user.controller');

const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/user', routeUser);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;