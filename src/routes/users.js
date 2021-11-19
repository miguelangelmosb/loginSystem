const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Login in the app')
}) 

router.get('/users/register', (req, res) => {
    res.send('Register');
})
module.exports = router;