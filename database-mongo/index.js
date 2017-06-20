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
  designType: String,
  bio: String,
  images: Array  
});

var Designer = mongoose.model('Designer', designersSchema);

var p0ulHenningsen = new Designer ({

});

var charlesNRayEames = new Designer ({

});

var josephDirand = new Designer ({

});

// -------------------------------------------------------------------------//

var designsSchema = mongoose.Schema({
  designType: {type: String, unique: true},
  description: String,
  images: Array
});


var Design = mongoose.model('Design', designsSchema);

var midCenturyModren = new Design ({

});

var scandinavian = new Design ({

});

var frenchNParisian = new Design ({

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



var selectAllDesigners = function(callback) {
  Designer.find({}, function(err, designers) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, designers);
    }
  });
};

var selectAllDesigns = function(callback) {
  Design.find({}, function(err, designs) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, designs);
    }
  })
} 

module.exports.selectAllDesigners = selectAllDesigners;
moduel.exports.selectAllDesigns = selectAllDesigns;

