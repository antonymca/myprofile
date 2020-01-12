var express = require('express');
const logger = require('../logger');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const ipInfo = req.headers.host;
  logger.info(JSON.stringify(ipInfo));
  logger.info("entered the users url");
  res.json({"data":[{"name":"user1"},{"name":"user2"},{"name":"user3"}]});
});

module.exports = router;
