const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})
router.get('/index', (req, res) => {
    res.render('index');
})
router.get('/order', (req, res) => {
    res.render('order');
})

router.get('/menu', (req, res) => {
    res.render('menu');
})
router.get('/login', (req, res) => {
    res.render('login');
})
router.get('/signup', (req, res) => {
    res.render('signup');
})


module.exports = router;