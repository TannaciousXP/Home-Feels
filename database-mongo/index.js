var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var designersSchema = mongoose.Schema({
  name: {type: String, unique: true},
  designType: String  
});

/*
Charles and Ray Eames for mid-century modern                        
Poul Henningsen for Scandinavian                        
make sure you get the spelling right babe                        
Joseph Dirand for French/Parisian
 */

// Create models for designSchema mid-century modern, scandinavian, french/parisian
// create models for interiorsDesignerSchema Charles and Ray, Poul, Jospeh


// var Item = mongoose.model('Item', itemSchema);

var Designer = mongoose.model('Design', designersSchema);

var selectAll = function(callback) {
  Designer.find({}, function(err, designers) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, designers);
    }
  });
};

module.exports.selectAll = selectAll;

