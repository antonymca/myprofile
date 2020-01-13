var express = require('express');
const logger = require('../logger');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const ipInfo = req.headers.host;
  logger.info(JSON.stringify(ipInfo));
  logger.info('entered base url');
  res.json({"data":[{"name":"user8"}]});
});

module.exports = router;
