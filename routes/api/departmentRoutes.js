const router = require('express').Router();
const Department = require('../../models/department');

router.get('/', async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/seed', (req, res) => {
    Department.bulkCreate([
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
    ]).then(() => {
        res.send('Seeding successful');
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    });
});

module.exports = router;

