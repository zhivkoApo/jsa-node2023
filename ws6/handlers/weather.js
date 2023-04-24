const fetch = require('node-fetch');

// let localCache = null
// let cacheTime = null

/*
    'Skopje': {
        localCache: '' OpenWather API data,
        cacheTime: '' Vremeto za koe shto gi chuvame podatocite
    },
    'Bitola': {
        localCache: '' OpenWather API data,
        cacheTime: '' Vremeto za koe shto gi chuvame podatocite
    },
    .
    .
    .
*/
let city = 'Kairo';
let cache = {};

const getCity = async (req, res) => {
    let key = '0816c374690c38fc267379cf9e0d3dfb';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}`;

    if (cache[req.params.city] &&
        cache[req.params.city].cacheTime !== null &&
        cache[req.params.city].cacheTime + (60 * 1000) < new Date().getTime()
    ) {
        console.log('go setirame localCache na null');
        cache[req.params.city].localCache = null;
    }

    if (!cache[req.params.city] || cache[req.params.city].localCache === null) {
        let data = await fetch(url);
        cache[req.params.city] = {
            localCache: await data.json(),
            cacheTime: new Date().getTime()
        };
    }

    return res.status(200).send(cache[req.params.city].localCache);
};

module.exports = {
    getCity
};