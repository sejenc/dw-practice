var ocdPrefix = 'ocd-division/country:us'

var ocdLookup = {
  'state': 'state',
  'city': 'place'
}

var format = str => str.trim().split(" ").join('_').toLowerCase()

var buildQuery = function(formData) {
    var r = []

    var keys = Object.keys(ocdLookup)

    for (var prop in formData) {
    if (keys.indexOf(prop) !== -1) r.push(
      `${ocdPrefix}/${ocdLookup[prop]}:${format(formData[prop])}`
      )
    }
    return r.join(',')
}

module.exports = buildQuery