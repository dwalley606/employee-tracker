const Department = require('../models/department');

const seedData = async (Department) => {
    const departmentData = [
      {
        id: '1',
        name: 'Sales',
      },
      {
        id: '2',
        name: 'Engineering',
      },
      {
        id: '3',
        name: 'Finance',
      },
      {
        id: '4',
        name: 'Legal',
      },
      {
        id: '5',
        name: 'HR',
      }
    ];
  
    await Department.bulkCreate(departmentData);
  };
  
  module.exports = {
    seedData
  };

