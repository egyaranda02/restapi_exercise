var express = require('express');
var auth = require('./auth');
var router = express.Router();

// daftar menu registrasi
router.post('/api/register', auth.registrasi);
router.post('/api/login', auth.login);

module.exports = router;