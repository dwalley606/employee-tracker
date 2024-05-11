const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const departmentSeed = require('./seeds/departmentSeed');
const roleSeed = require('./seeds/roleSeed');
const employeeSeed = require('./seeds/employeeSeed');
const userPrompts = require('./queries/userPrompts');

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
sequelize.sync({ force: true }).then(async () => {

  // Seed the database using individual seed files
  await departmentSeed.seedData(Department);
  await roleSeed.seedRoles(Role);
  await employeeSeed.seedEmployees(Employee);

  const handleUserPrompts = async () => {
    try {
      const answers = await userPrompts(); // Capture user input
  
      if (answers.action === 'View all employees') {
        const allEmployees = await Employee.findAll();
        console.log(allEmployees);
      } else if (answers.action === 'View all departments') {
        const allDepartments = await Department.findAll();
        console.log(allDepartments);
      } else if (answers.action === 'View all roles') {
        const allRoles = await Role.findAll();
        console.log(allRoles);
      } else if (answers.action === 'Add a department') {
        await Department.create({ name: answers.name });
        console.log('Department added successfully');
      } else if (answers.action === 'Add a role') {
        await Role.create({ title: answers.title, salary: answers.salary, department: answers.department });
        console.log('Role added successfully');
      } else if (answers.action === 'Add an employee') {
        await Employee.create({ first_name: answers.first_name, last_name: answers.last_name, role: answers.role, manager: answers.manager });
        console.log('Employee added successfully');
      } else if (answers.action === 'Update an employee role') {
        // Logic to update employee role
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Additional error handling or logging can be added here
    }
  };
  
  // Call the function to handle user prompts
  handleUserPrompts();
  
  
  
  
  
  
  app.listen(PORT, () => console.log('Now listening'));
});


