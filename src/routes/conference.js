const express = require('express');
const router = express.Router();

router.get('/conferences', (req, res) => {
    res.send('conferences');
})

module.exports = router;