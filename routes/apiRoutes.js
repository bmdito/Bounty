var db = require("../models");

module.exports = function(app) {
app.put("/bounties/accepted/:id", function(req,res){
  console.log("Test Accepted");
  db.Bounty.update({
    accepted: true
  },{
    where:{
      id: req.params.id
    }
  }).then(function(){
    res.redirect("/bounties");
  })
});

app.put("/bounties/completed/:id", function(req,res){
  console.log("Test Completed");
  db.Bounty.update({
    completed: true
  },{
    where:{
      id: req.params.id
    }
  }).then(function(){
    res.redirect("/bounties");
  })
});

}