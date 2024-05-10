const router = require('express').Router();
const Role = require('../../models/Role');

router.get('/', async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/seed', async (req, res) => {
    Role.bulkCreate([
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
    ])
});

module.exports = router;

