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

module.exports = router;

