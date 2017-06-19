var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// create a schema for styles
  // designSchema
    // name {type: String, Unique: true}

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

// create a schemea for interiorDesignerSchemea
  // name: {type: String, Unqiue: true}
  // bio: String
  // tips: String
  // designtype: foreign key of designSchema name

/*
Charles and Ray Eames for mid-century modern                        
Poul Henningsen for Scandinavian                        
make sure you get the spelling right babe                        
Joseph Dirand for French/Parisian
 */

// Create models for designSchema mid-century modern, scandinavian, french/parisian
// create models for interiorsDesignerSchema Charles and Ray, Poul, Jospeh


var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;