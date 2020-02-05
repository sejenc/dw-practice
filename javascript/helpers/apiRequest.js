var axios = require('axios')

var buildQuery = require('./generateQueryString')

var endpoint = 'https://api.turbovote.org/elections/upcoming?district-divisions'

var request = async function handler (req, res) {

    var query = buildQuery(req.body)
  
    var response
  
    try {
        response = await axios.get(
            `${endpoint}=${query}`, 
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
    } catch (err) {
      res.status(500).send()
    }
    res.render('results', {electionData: response.data ? response.data[0]: null })
}

module.exports = request