const router = require('express').Router();
const Role = require('../../models/role');

router.get('/', async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

