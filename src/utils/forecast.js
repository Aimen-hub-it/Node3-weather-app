const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=15f2e2df0870010c8ddb87c5f76083da&query=' + longitude + ',' + latitude + '' 
    request({ url: url, json: true}, (error, {body}) => {
      if (error) {
        callback('Unable to connect to location weather services!', undefined)
      } else if (body.error) {
         callback('Unable to find location', undefined)
      } else {
        
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. there is a "  + body.current.feelslike  + " % chance of rain.") 
        
      } 
      
    })
    }

    // 'http://api.weatherstack.com/current?access_key=15f2e2df0870010c8ddb87c5f76083da&query=-75.7088,44.1545&units=f' 
   
   

    module.exports = forecast