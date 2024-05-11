const inquirer = require('inquirer');

const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View all departments', 'View all roles', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?',
            when: (answers) => answers.action === 'Add a department' || answers.action === 'Update an employee role',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
            when: (answers) => answers.action === 'Add a role',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            when: (answers) => answers.action === 'Add a role',
        },
        {
            type: 'input',
            name: 'department',
            message: 'What is the department of the role?',
            when: (answers) => answers.action === 'Add a role',
        },
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the first name of the employee?',
            when: (answers) => answers.action === 'Add an employee',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is the last name of the employee?',
            when: (answers) => answers.action === 'Add an employee',
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is the role of the employee?',
            when: (answers) => answers.action === 'Add an employee',
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Who is the manager of the employee?',
            when: (answers) => answers.action === 'Add an employee',
        },
    ]);
};

module.exports = userPrompts;

