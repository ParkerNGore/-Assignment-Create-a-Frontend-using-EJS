var express = require("express");
var router = express.Router();
const parker = require("../parker.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", parker);
});

module.exports = router;
