let express = require('express');
let router = express.Router();

let request = require('request');
const config = require('../config/weatherApiConfig')
const res = require("express");
const redis =  require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const asyncExists = promisify(client.exists).bind(client);
const asyncSet = promisify(client.set).bind(client);
const asyncExpire = promisify(client.expire).bind(client);

client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});

router.route('/')
    .get((req, res, next)=>{
        res.render('index', {weather: 'no city has been passed yet'})
    })

    .post(async (req, res, next) => {
        if (await asyncExists(req.body.city)){
            let value = await asyncGet(req.body.city);
            let response = {
                key: req.body.city,
                value: value,
                cached: true
            }
            console.log(response);
            res.json(response);
        }
        else {
            handleApiCall(req)
                .then(async value => {
                    console.log(value);
                    let response = {
                        key: req.body.city,
                        value: value, 
                        cached: false
                    }

                    let status = await asyncGet(req.body.city, value);
                    await asyncExpire(req.body.city, 15);
                    console.log(status);
                    res.json(response);
                    
                    // console.log(JSON.parse(value).current)
                    // let currentWeather = JSON.parse(value).current.temp_f;
                    // console.log(currentWeather)
                    // res.render('index', {weather: JSON.stringify(currentWeather)})
                })
        }

    })

//function that handles the call to the weather Api
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

