var db = require("../models");

module.exports = function(app) {
  app.get("/bounties", function(req, res) {
    db.Bounty.findAll({}).then(function(results) {
      var hbObj = {
        bounties: results
      };
      res.render("index", hbObj);
    });
  });

  app.get("/", function(req, res) { 
      res.render("landing");
  });

  app.post('/add', function(req,res){
    res.redirect('add');
  });

  app.post('/display', function(req,res){
    res.redirect('/bounties');
  });
  
  

  app.get("/add", function(req,res){
		res.render('add');
	});

  // Create a new Bounty
  app.post("/add_bounty", function(req, res) {
		db.Bounty.create({
		  title: req.body.title,
		  description: req.body.description,
		  payment: req.body.payment,
		  completed: req.body.completed
	
		}).then(function() {
		res.redirect('/bounties');	  
		});
	  });
};
