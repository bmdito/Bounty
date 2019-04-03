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

  app.get("/add", function(req,res){
		res.render('add');
	});

  // Create a new Bounty
  app.post("/add", function(req, res) {
		db.Bounty.create({
		  title: req.body.title,
		  description: req.body.description,
		  payment: req.body.payment,
		  completed: req.body.completed
	
		}).then(function() {
		
		
		res.render('index');
		  
		
		  
		});
		
	  });

};
