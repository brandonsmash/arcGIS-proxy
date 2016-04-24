import unirest from 'unirest';

const hostUrl = process.env.GIS_HOST;

export default class Gis {

    constructor(queryType) {
     this.queryType = queryType;
    }

    findIt(query) {

     return new Promise((resolve, reject) => {

        const searchType = this._getApi(query);
        const locationQuery = {"text": query.street, "f": "pjson", outFields: query.outFields}

        unirest
         .post(searchType)
         .headers({'Accept': 'application/x-www.form-urlencoded'})
         .send(locationQuery)
         .end((response) => {
            resolve(JSON.parse(response.body))
         });
     
     });
        
    }

    _getApi(query) {
     const fullQuery = `${hostUrl}${this.queryType}`;

     console.log(fullQuery);

     return fullQuery;
    }

}

module.exports = Gis;