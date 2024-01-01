const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('main');
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      console.log('logged in');
      return;
    }
    
    res.render('signup');
    console.log('/signup hit');
  });

module.exports = router;