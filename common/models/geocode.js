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

  Geocode.suggest = (data) => {
    return new Promise((resolve, reject) => {

      const userSearch = new Gis('suggest');

      userSearch
      .encodeLocation(data)
      .then((suggestions) => {
        resolve(suggestions);
      });

    });
  }

  // expose remote methods
  Geocode.remoteMethod('locate', {
    accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
    returns: { arg: 'data', type: 'object', root: true },
    http: { path: '/locate', verb: 'post' }
  });

  Geocode.remoteMethod('suggest', {
    accepts: { arg: 'data', type: 'object', http: { source: 'body' } },
    returns: { arg: 'data', type: 'object', root: true },
    http: { path: '/suggest', verb: 'post' }
  });

};
