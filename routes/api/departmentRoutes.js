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

module.exports = router;

