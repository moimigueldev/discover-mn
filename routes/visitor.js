const express = require('express'),
    router = express.Router(),
    request = require('request');

router.get('/', async (req, res) => {

    request.get('https://json.geoiplookup.io/', (err, response, body) => {
    
        const ipAdress = JSON.parse(body).ip;

        console.log('res', ipAdress)
    })

    res.sendStatus('ok')
})


module.exports = router;

