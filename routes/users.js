var express = require('express');
const logger = require('../logger');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const ipInfo = req.headers.host;
  logger.info(JSON.stringify(ipInfo));
  logger.info("entered the users url");
  res.json({"data":[{"name":"user4"},{"name":"user5"},{"name":"user6"}]});
});

module.exports = router;
