const Table = require('cli-table');
const sequelize = require('../config/connection'); // Import your existing Sequelize connection
 

const addEmployee = async (employee) => {
  return await sequelize.models.Employee.create({
    first_name: employee.first_name,
    last_name: employee.last_name,
    role: employee.role,
    manager: employee.manager
  });
}

const addDepartment = async (department) => {
  return await sequelize.models.Department.create({
    name: department.name
  });
}

const addRole = async (role) => {
  return await sequelize.models.Role.create({
    title: role.title,
    salary: role.salary,
    department: role.department
  });
}

const getAllEmployees = async () => {
  const employees = await Employee.findAll();
  return employees;
}

const getAllRoles = async () => {
  const roles = await sequelize.models.Role.findAll();
  displayTable(roles);
}

const getAllDepartments = async () => {
  const departments = await sequelize.models.Department.findAll();
  displayTable(departments);
}

const displayTable = (data) => {
  const table = new Table();
  if (data.length > 0) {
    table.push(Object.keys(data[0].dataValues));
    data.forEach(row => {
      table.push(Object.values(row.dataValues));
    });
    console.log(table.toString());
  } else {
    console.log('No data to display');
  }
}

module.exports = {
  addEmployee,
  addDepartment,
  addRole,
  getAllEmployees,
  getAllRoles,
  getAllDepartments
}


