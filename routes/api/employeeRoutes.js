const router = require('express').Router();
const Employee = require('../../models/employee');

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/seed', async (req, res) => {
    Employee.bulkCreate([
        {
           first_name: 'John',
           last_name: 'Doe',
           role_id: 1,
           manager_id: null
        },
        {
            first_name: 'Jane',
            last_name: 'Doe',
            role_id: 2,
            manager_id: 1
        },
        {
            first_name: 'Bob',
            last_name: 'Smith',
            role_id: 3,
            manager_id: 2
        },
        {
            first_name: 'Alice',
            last_name: 'Johnson',
            role_id: 4,
            manager_id: 2
        },
        {
            first_name: 'Chris',
            last_name: 'Brown',
            role_id: 5,
            manager_id: 3
        },
        {
            first_name: 'Mike',
            last_name: 'Jones',
            role_id: 6,
            manager_id: 3
        },
        {
            first_name: 'Jim',
            last_name: 'Davis',
            role_id: 7,
            manager_id: 4
        },
        {
            first_name: 'Jill',
            last_name: 'Miller',
            role_id: 8,
            manager_id: 4
        },
        {
            first_name: 'Bill',
            last_name: 'Wilson',
            role_id: 9,
            manager_id: 5
        },
        {
            first_name: 'Sue',
            last_name: 'Davis',
            role_id: 10,
            manager_id: 5
        }

    ]).then(() => {
        res.json({ message: 'Seeding successful' });
    }).catch(err => {
        res.status(500).json({ error: err.message });
    });
});


module.exports = router;

