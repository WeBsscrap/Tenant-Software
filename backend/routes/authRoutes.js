const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username } = req.body;
    const token = jwt.sign({ username }, 'secret_key');
    res.json({ token });
});

module.exports = router;
