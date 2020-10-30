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


module.exports = router;

