const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Import model to sync table with database
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});