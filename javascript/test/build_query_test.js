var tap = require('tap');
var buildQuery = require('../helpers/generateQueryString.js');

var obj = {
    'state': 'NY',
    'city': 'Brooklyn'
}

tap.equal(
    buildQuery(obj), 
    'ocd-division/country:us/state:ny,ocd-division/country:us/place:brooklyn'
)