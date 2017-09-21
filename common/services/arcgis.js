import unirest from 'unirest';

const hostUrl = process.env.GIS_HOST;

export default class Gis {

    constructor(queryType) {
     this.queryType = queryType;
    }

    encodeLocation(query) {
     return new Promise((resolve, reject) => {

        const searchPath = this._getApi(query);
        const locationQuery = {
            "text": query.street, 
            "f": "pjson", 
            outFields: query.outFields || '*', 
            maxLocations: query.maxLocations || 20
        }
      
        this._sendRequest(searchPath, locationQuery)
        .end(function(payload) {
            resolve(JSON.parse(payload.body));
        });
     
     });
    }

    _getApi(query) {
     const fullQuery = `${hostUrl}${this.queryType}`;
     return fullQuery;
    }

    _sendRequest(searchQuery, config) {
     return unirest
     .post(searchQuery)
     .headers({'Accept': 'application/x-www.form-urlencoded'})
     .send(config);

    }

}

module.exports = Gis;
