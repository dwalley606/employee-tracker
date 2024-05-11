const Role = require('../models/role');

const seedRoles = async (Role) => {
    const roleData = [
      {
        id: 1,
        title: 'Sales Associate',
        salary: 50000,
        department_id: 1
      },
      {
        id: 2,
        title: 'Sales Manager',
        salary: 75000,
        department_id: 1
      },
      {
        id: 3,
        title: 'Engineer',
        salary: 80000,
        department_id: 2
      },
      {
        id: 4,
        title: 'Senior Engineer',
        salary: 120000,
        department_id: 2
      },
      {
        id: 5,
        title: 'CFO',
        salary: 150000,
        department_id: 3
      },
      {
        id: 6,
        title: 'COO',
        salary: 180000,
        department_id: 3
      },
      {
        id: 7,
        title: 'Legal Team Lead',
        salary: 100000,
        department_id: 4
      },
      {
        id: 8,
        title: 'Lawyer',
        salary: 90000,
        department_id: 4
      },
      {
        id: 9,
        title: 'HR Manager',
        salary: 75000,
        department_id: 5
      },
      {
        id: 10,
        title: 'HR Associate',
        salary: 50000,
        department_id: 5
      }
    ];
  
    await Role.bulkCreate(roleData);
  };
  
  module.exports = {
    seedRoles
  };

