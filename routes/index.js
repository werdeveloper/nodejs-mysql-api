var express = require('express');
var router = express.Router();
var usersRoute = require('./users/users.router');

router.use('/users', usersRoute);

module.exports = router;