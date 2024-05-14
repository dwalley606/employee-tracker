const router = require('express').Router();
const Employee = require('../../models/employee');

// GET route to fetch all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST route to add a new employee
router.post('/', async (req, res) => {
    const { first_name, last_name, role, manager } = req.body; // Assuming employee details are sent in the request body

    try {
        const newEmployee = await Employee.create({ first_name, last_name, role, manager });
        res.status(201).json(newEmployee); // Return the newly created employee
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

