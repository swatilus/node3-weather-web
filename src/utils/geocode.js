const request = require('request')


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3dhazEzIiwiYSI6ImNrMzRjZzJxeDB3aG4zZG5vemxxZ202dnUifQ.-Wcy69SsziwBwR2QUWHeyA&limit=1`

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Mapbox service!')
        } else if (body.features.length === 0) {
            callback('Unable to find location! Please try another location.') 
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode