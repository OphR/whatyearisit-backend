var express = require('express');
var router = express.Router();

router.get('/year', function(req, res, next) {
  const currentYear = new Date().getFullYear();
  res.json({ year: currentYear.toString() });
});

module.exports = router;
