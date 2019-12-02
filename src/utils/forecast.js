const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/8fe843bfc8e3393fae4eb109a680b767/${lat},${long}?units=si`

    request ({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It's currently ${body.currently.temperature} degree out. There is a ${body.currently.precipProbability}% change of rain`)
        }
    })
}

module.exports = forecast