const request = require('request');
const url = "http://api.weatherstack.com/current?access_key=8dde5584b2244a00de8fe78e372e0ca8&query=37.8267,-122.4233";

request({url: url, json: true}, (error, response) => {
    const data = response.body
//    console.log(data.current) 
})

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtzaGF5NzcyOSIsImEiOiJja2IyZjY1NTkwOXZ3MnBwaDRqMXN0cWs0In0.mR85j5Q1gztGZD1ZqHxX2A";

request({url: geoCodeUrl, json: true}, (error, response) => {
    const data = response.body;
    const lat = data.features[0].center[1];
    const long = data.features[0].center[0];
    console.log('geoCodeJSON lat', lat);
    console.log('geoCodeJSON long', long);
})