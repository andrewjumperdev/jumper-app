const express =  require('express');
const router = express.Router();

//routes
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Jumper-Enterprise' });
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About-me' });
});

router.get('/mywork', (req, res) => {
    res.render('mywork.html', { title: 'Portafolio' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact' });
});

module.exports = router;