const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  req.user ? res.render('logged', {
      userName: req.user.name.givenName,
      userAvatar: req.user.photos[0].value,
      userFullName: req.user.displayName,
      userEmail: req.user.emails[0].value,
  }) : res.redirect('no-permission')
  console.log(req.user);//displaying user data from google account in json format
});
router.get('/user/profile/', (req, res) => {
    res.render('Profile');
  });
router.get('/user/profile/settings', (req, res) => {
    req.user ? res.render('settings') : res.redirect('no-permission');
});
router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;