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
  // Create a new Bounty
  app.post("/add_bounty", function(req, res) {

    let { title, description, payment } = req.body;
    let errors = [];
    
    //collects errors for missing fields
    if(!title){
      errors.push({ text: "please add title!"});
    }
  
    if(!description){
      errors.push({ text: "please add a Bounty description!"});
    }
  
    if(!payment){
      errors.push({ text: "please add a Reward!"});
    }
  
    if(errors.length>0){
      res.render('add', {
          errors,
          title,
          description,
          payment      
      
      });
    } else {
  
      db.Bounty.create({
        title: req.body.title,
        description: req.body.description,
        payment: req.body.payment,
        completed: req.body.completed
    
      }).then(function() {
      res.redirect('/bounties');	  
      });
    }    
      });
  };