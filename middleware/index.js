var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');

// daftar menu registrasi
router.post('/api/register', auth.registrasi);
router.post('/api/login', auth.login);

// Halaman dengan authorisasi
router.get('/api/halamanPercobaan', verifikasi(), auth.halamanPercobaan);

module.exports = router;