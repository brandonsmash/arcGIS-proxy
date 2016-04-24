const Gis = require('../services/arcgis');

module.exports = (Geocode) => {

  // define remote method
  Geocode.locate = (data) => {
    return new Promise((resolve, reject) => {

      const location = new Gis('find');

      location
      .findIt(data)
      .then(function(results) {
        resolve(results);
      });

    });
  }

  // expose remote method
  Geocode.remoteMethod('locate', {
    accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
    returns: { arg: 'data', type: 'object', root: true },
    http: { path: '/locate', verb: 'post' }
  });

};