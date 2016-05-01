const Gis = require('../services/arcgis');

module.exports = (Geocode) => {

  // define remote method
  Geocode.locate = (data) => {
    return new Promise((resolve, reject) => {

      const location = new Gis('find');

      location
      .encodeLocation(data)
      .then(function(geoData) {
        resolve(geoData);
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