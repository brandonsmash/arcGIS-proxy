This api intends to simplify querying arcGIS services. The models in the API represent the various rest services available. For example, there is a geocode model that interacts with the geocode rest service for a variety of location and distance queries. Other services include the feature, map, and geometry services respectively that are mapped to object in the API.

# API

### Encode a single location

This endpoint encodes a single string address and returns information in JSON.  

## Endpoint
```
POST api/geocode/locate
```

## Payload
```
{
 "street": "118 washington streets morristown",
 "outFields":"Subregion, Loc_Name"
}
```
## Response

```
{
  "spatialReference": {
    "wkid": 4326,
    "latestWkid": 4326
  },
  "locations": [
    {
      "name": "118 Washington St, Morristown, New Jersey, 07960",
      "extent": {
        "xmin": -74.489879,
        "ymin": 40.798684,
        "xmax": -74.487879,
        "ymax": 40.800684
      },
      "feature": {
        "geometry": {
          "x": -74.4888778912009,
          "y": 40.799684121626
        },
        "attributes": {
          "Subregion": "Morris",
          "Loc_Name": "USA.PointAddress"
        }
      }
    }
  ]
}
```