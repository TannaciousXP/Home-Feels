var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://localhost/test',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });
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

var charlesNRayEames = new Designer ({
  name: 'Charles and Ray Eames',
  designType: 'Mid-Century Modern',
  bio: `Charles Eames was born in 1907 in St. Louis, Missouri.  He attended school there and developed an interest in engineering and architecture.  After attending Washington University in St. Louis on scholarship for two years and being thrown out for his advocacy of Frank Lloyd Wright, he began working in an architectural office.  In 1929, he married his first wife, Catherine Woermann (they divorced in 1941), and a year later Charles’s only child, Lucia was born.  In 1930, Charles started his own architectural office.  He began extending his design ideas beyond architecture and received a fellowship to Cranbrook Academy of Art in Michigan, where he eventually became head of the design department.

Ray Kaiser Eames was born in 1912 in Sacramento, California.  She studied painting with Hans Hofmann in New York before moving on to Cranbrook Academy where she met and assisted Charles and Eero Saarinen in preparing designs for the Museum of Modern Art’s Organic Furniture Competition.  Charles and Eero’s designs, created by molding plywood into complex curves, won them the two first prizes.`,
  images: ['http://www.eamesoffice.com/wp-content/uploads/2015/02/S-Eames-Plastic-Armchair-DAR_78511_preview.jpg', 'http://www.eamesoffice.com/wp-content/uploads/2015/02/S-LI_EAG_P_20120915_151_P-1024x819.jpg']
});

Designer.findOne({ name: 'Charles and Ray Eames'}, function (err, designer){
  if (err) {
    console.log(err);
  } else {
    if (designer === null) {
      charlesNRayEames.save(function(err, charlesNRayEames) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED CHARLES N RAY INTO DESIGNER DB');
        }
      });
    } else {
      console.log(designer.name + ' is already in the DesignerDB');
    }
  }
});

// charlesNRayEames.save(function(err, charlesNRayEames) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('SAVED CHARLES N RAY INTO DESIGNER DB');
//   }
// });


var poulHenningsen = new Designer ({
  name: 'Poul Henningsen',
  designType: 'Scandinavian',
  bio: `Danish architect Poul Henningsen, known by his initials, ”PH” was obsessed with light. He is the legendary creator of the lighting series carrying his name. He can be said to be the world’s first lighting architect. Poul Henningsen devoted his entire career to investigating the importance of light for our well being. He worked on the theory that the observer should not be subjected to direct glare from the electric light source. Henningsen used a series of layered shades to both spread the light and conceal the light bulb, thus creating a softer more diffused lighting.`,
  images: ['http://www.louispoulsen.com/media/ProductImagesDownloads//INT/90294-5-1-01-PH%20Louvre.jpg?width=559&mode=max&format=jpg', 'http://www.louispoulsen.com/media/3474/media-1045872-statsministeriet-05.jpg?center=0.29333333333333333,0.53365384615384615&mode=crop&width=800&height=800&rnd=130818632810000000&scale=both']
});

Designer.findOne({ name: 'Poul Henningsen' }, function (err, designer){
  if (err) {
    console.log(err);
  } else {
    if (designer === null) {
      poulHenningsen.save(function(err, poulHenningsen) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVE POUL INTO DESIGNER DB');
        }
      });
    } else {
    console.log(designer.name + ' is already in the DesignerDB');
    }
  }
});

// poulHenningsen.save(function(err, poulHenningsen) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('SAVE POUL INTO DESIGNER DB');
//   }
// });

var yvesBehar = new Designer ({
  name: 'Yves Béhar',
  designType: 'Industrial',
  bio: `Yves is a design entrepreneur who believes that product, digital and brand design are cornerstones of any business. He is the founder of fuseproject, the San Francisco and New York based design and branding firm he established in 1999. He is also Chief Creative Officer at Jawbone, where for the last 11 years his products, brand and communications work has helped the company become a leader in wearable and audio consumer electronics. Behar is also the Creative Co-Founder of OUYA, an open sourced gaming platform, and is Co-founder of start-up August, a next generation home entry system.

His other collaborations with renowned partners such as Herman Miller, GE, Puma, PayPal, SodaStream, Samsung, Issey Miyake, Prada and many others have received international acclaim. Béhar’s works are included in the permanent collections of museums worldwide, and he is a frequent speaker on design, sustainability and business topics.`,
  images: ['https://d4qwptktddc5f.cloudfront.net/canopy_fuseproject_private_office_workstations_and_chairs_copy.jpg', 'https://d4qwptktddc5f.cloudfront.net/canopy_fuseproject_private_office_workstations_and_chairs_copy.jpg']
});

Designer.findOne({ name: 'Yves Béhar' }, function (err, designer){
  if (err) {
    console.log(err);
  } else {
    if (designer === null) {
      yvesBehar.save(function(err, yvesBehar) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED YVES INTO DESIGNER DB');
        }
      });
    } else {
      console.log(designer.name + ' is already in the DesignerDB');
    }
  }
});

// yvesBehar.save(function(err, yvesBehar) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('SAVED YVES INTO DESIGNER DB');
//   }
// });

// -------------------------------------------------------------------------//

var designsSchema = mongoose.Schema({
  designType: {type: String, unique: true},
  description: String,
  images: Array
});


var Design = mongoose.model('Design', designsSchema);

var midCenturyModern = new Design ({
  designType: 'Mid-Century Modern',
  description: 'Mid-century modern is an architectural, interior, product and graphic design that describes mid-20th century developments in modern design, architecture and urban development from roughly 1933 to 1965.',
  images: ['https://s-media-cache-ak0.pinimg.com/564x/1d/29/87/1d2987c473980cee28827f9a8d8b21a7.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/68/b6/62/68b662cb6bdd7678551e16530db77f4b.jpg']
});

Design.findOne({ designType: 'Mid-Century Modern' }, function (err, design) {
  if (err) {
    console.log(err);
  } else {
    // console.log('MID CENT FIND: ', design);
    if (design === null) {
      midCenturyModern.save(function(err, midCenturyModern) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED MIDCENTURY INTO DESIGN DB');
        }
      });
    } else {
      console.log(design.designType + ' is already in the DesignDB');
    }
  }
});


var scandinavian = new Design ({
  designType: 'Scandinavian',
  description: 'Scandinavian design is a design movement characterized by simplicity, minimalism and functionality that emerged in the 1950s in the five Nordic countries of Finland, Norway, Sweden, Iceland and Denmark. ... Scandinavian design often makes use of form-pressed wood, plastics, anodized or enameled aluminum or pressed steel.',
  images: ['https://s-media-cache-ak0.pinimg.com/564x/23/18/13/231813e0f9f04e4c8c3ea4b7d5594532.jpg', 'https://s-media-cache-ak0.pinimg.com/564x/1e/53/e6/1e53e69b1e15bda2144129dc9ce8a5e1.jpg']
});

Design.findOne({ designType: 'Scandinavian' }, function (err, design){
  if (err) {
    console.log(err);
  } else {
    // console.log('INSIDE SCAN:', design);
    if (design === null) {
      scandinavian.save(function(err, scandinavian) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED SCANDINAVIAN INTO DESIGN DB');
        }
      });
    } else {
      console.log(design.designType + ' is already in the DesignDB');
    }
  }
});


var industrial = new Design ({
  designType: 'Industrial',
  description: 'Industrial style or industrial chic refers to an aesthetic trend in interior design that takes clues from old factories and industrial spaces that in recent years have been converted to lofts and other living spaces.',
  images: ['https://d4qwptktddc5f.cloudfront.net/canopy_fuseproject_private_office_workstations_and_chairs_copy.jpg', 'https://static.dezeen.com/uploads/2016/10/yves-behar-canopy-interiors-offices-san-francisco-california-usa_dezeen_2364_col_0-852x936.jpg']
});

Design.findOne({ designType: 'Industrial' }, function (err, design){
  if (err) {
    console.log(err);
  } else {
    if (design === null) {
      industrial.save(function(err, scandinavian) {
        if (err) {
          console.log(err);
        } else {
          console.log('SAVED SCANDINAVIAN INTO DESIGN DB');
        }
      });
    } else {
      console.log(design.designType + ' is already in the DesignDB');
    }
  }
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

module.exports.Designer = Designer;
module.exports.Design = Design;
module.exports.selectAllDesigners = selectAllDesigners;
module.exports.selectAllDesigns = selectAllDesigns;

