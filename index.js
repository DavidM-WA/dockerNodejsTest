const Sequelize = require('sequelize');
const express = require('express');
const homeRouter = require('./modules/home/routes/home');

const sequelize = new Sequelize('master', 'sa', 'Password123', {
  host: 'localhost',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

let app = express();
let homeRoutes = homeRouter.routes(sequelize);
app.use(homeRoutes);

app.listen(3000);
