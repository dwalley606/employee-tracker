const sequelize = require('../config/connection');
const Department = require('../models/department');
const Role = require('../models/role');
const Employee = require('../models/employee');

const departmentSeeds = require('./departmentSeed.json');
const roleSeeds = require('./roleSeed.json');
const employeeSeeds = require('./employeeSeed.json');

sequelize.sync({ force: true }).then(async () => {
    await Department.bulkCreate(departmentSeeds);
    await Role.bulkCreate(roleSeeds);
    await Employee.bulkCreate(employeeSeeds);
    console.log('Seeding completed successfully');
    process.exit(0);
}).catch(err => {
    console.error('Error seeding data:', err);
    process.exit(1);
});




