const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const userPrompts = require('./queries/userPrompts');
const axios = require('axios');
const inquirer = require('inquirer');
const Table = require('cli-table'); // Import cli-table

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
sequelize.sync().then(async () => {
    handleUserPrompts();
});

const handleUserPrompts = async () => {
  let continuePrompt = true;

  while (continuePrompt) {
    try {
      const answers = await userPrompts(); // Capture user input

      // Handle different actions based on user input
      if (answers.action === 'View all employees') {
        const responseEmployees = await axios.get('http://localhost:3001/api/employees');
        displayTable(responseEmployees.data);
      } else if (answers.action === 'View all roles') {
        const responseRoles = await axios.get('http://localhost:3001/api/roles');
        displayTable(responseRoles.data);
      } else if (answers.action === 'View all departments') {
        const responseDepartments = await axios.get('http://localhost:3001/api/departments');
        displayTable(responseDepartments.data);
      } else if (answers.action === 'Add a department') {
        const response = await axios.post('http://localhost:3001/api/departments', { name: answers.name });
        console.log(response.data);
      } else if (answers.action === 'Add a role') {
        const response = await axios.post('http://localhost:3001/api/roles', { title: answers.title, salary: answers.salary, department: answers.department });
        console.log(response.data);
      } else if (answers.action === 'Add an employee') {
        const response = await axios.post('http://localhost:3001/api/employees', { first_name: answers.first_name, last_name: answers.last_name, role: answers.role, manager: answers.manager });
        console.log(response.data);
      } else if (answers.action === 'Update an employee role') {
        // Logic to update employee role
      }

      continuePrompt = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: 'Do you want to perform another action?',
        },
      ]).then(response => response.continue);

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  console.log('Thank you for using the employee tracker!');
};

const displayTable = (data) => {
  if (!data || data.length === 0) {
      console.log("No data available to display.");
      return;
  }

  // Determine column headers from the keys of the first item
  const headers = Object.keys(data[0]);
  const colWidths = headers.map(header => Math.max(...data.map(item => item[header]?.toString().length), header.length) + 2);

  // Create a new table with dynamic headers and column widths
  const table = new Table({
      head: headers,
      colWidths: colWidths
  });

  // Add each item in the data array as a row in the table
  data.forEach(item => {
      table.push(headers.map(header => item[header] || ''));
  });

  // Display the table
  console.log(table.toString());
};

app.listen(PORT, () => console.log('Now listening'));


