const hostUrl = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/'

export default class Gis {

    constructor(queryType) {
     this.queryType = queryType;
    }

    findIt(query) {

     return new Promise((resolve, reject) => {
      const path = this.getApi(query);
      resolve('query');
     });
        
    }

    getApi(query) {
     const fullQuery = `${hostUrl}${this.queryType}`;
     return fullQuery;
    }

}

module.exports = Gis;