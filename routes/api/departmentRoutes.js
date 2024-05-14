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

// POST route to add a new department
router.post('/', async (req, res) => {
    const { name } = req.body; // Assuming the department name is sent in the request body

    try {
        const newDepartment = await Department.create({ name });
        res.status(201).json(newDepartment); // Return the newly created department
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

