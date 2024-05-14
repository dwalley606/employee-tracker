const router = require('express').Router();
const Role = require('../../models/role');

// GET route to fetch all roles
router.get('/', async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST route to add a new role
router.post('/', async (req, res) => {
    const { title, salary, department } = req.body; // Assuming role details are sent in the request body

    try {
        const newRole = await Role.create({ title, salary, department });
        res.status(201).json(newRole); // Return the newly created role
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

