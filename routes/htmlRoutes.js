var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Bounty.findAll({}).then(function(results) {
      var hbObj = {
        bounties: results
      };
      res.render("index", hbObj);
    });
  });
};
