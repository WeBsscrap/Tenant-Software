const express = require('express');
const { generateProductBundle } = require('../services/aiBundler');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { products, projectDetails } = req.body;
        const bundle = await generateProductBundle(products, projectDetails);
        res.json(bundle);
    } catch (err) {
        console.error("Bundle generation failed:", err);
        res.status(500).json({ error: "Failed to generate product bundle" });
    }
});

module.exports = router;
