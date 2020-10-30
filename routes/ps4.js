let express = require('express');
let router = express.Router();
let request = require('request');
const config = require('../config/weatherApiConfig')
const res = require("express");

router.route('/')
    .get((req, res, next)=>{
        res.render('index', {weather: 'no city has been passed yet'})
    })
    .post((req, res, next) => {
        // let city = req.body.city;
        // let key = weatherApiConfig.js.ps4Options.key;
        // let url = weatherApiConfig.js.ps4Options.url + key + '&q= ' + city;
        handleApiCall(req)
            .then(value => {
                // console.log(value);
                console.log(JSON.parse(value).current)
                let currentWeather = JSON.parse(value).current.temp_f;
                console.log(currentWeather)
                res.render('index', {weather: JSON.stringify(currentWeather)})
            })

    })

const handleApiCall = (args) => {
    return new Promise((resolve, reject) => {
        let key = config.ps4Options.key;
        let city = args.body.city;
        console.log(city);
        let url = config.ps4Options.url + key + '&q= ' + city;

        request(url, function (error, response) {
            if (error) throw new Error(error);
            resolve(response.body)
        })
    })
}

// // Grabs name from HTML form and returns json object of result
// router.post('/', async (request, response) => {
//     if (typeof request.body.city === 'undefined') {
//         // The parameter is missing, example response...
//         res.status(400).json({error: 'missing parameter team', data: null}); // Only an  example
//         return;
//     }
//
//     //build the request URL using the input city and key from our weatherApiConfig.js file
//     //'uri' : 'http://api.weatherapi.com/v1/current.json' + '?key=' + req.query.key + '&q= ' + req.query.q
//     let city = request.body.city;
//     let key = weatherApiConfig.js.ps4Options.key;
//     let url = weatherApiConfig.js.ps4Options.url + key + '&q= ' + city;
//     console.log(api_url);
//
//     let fetch_response = await fetch(url);
//     let weatherData = await fetch_response.json();
//     console.log(weatherData)
//     response.json(weatherData);
// });


module.exports = router;

