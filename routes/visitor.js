const express = require('express'),
    router = express.Router(),
    request = require('request');

// FIREBASE
const admin = require('firebase-admin');
const serviceAccount = require('./../ServiceAccountKey');

admin.initializeApp ({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


router.get('/', async (req, res) => {

    db.collection('discover-mn').doc('visitors').get().then(doc => {
        let ipAddressArr = doc.data().ipAddress;
        console.log('db', ipAddressArr);

        request.get('https://json.geoiplookup.io/', (err, response, body) => {
            const visitorIpAddress = JSON.parse(body).ip;
            ipAddressArr.includes('77.41.012.174')?console.log('Ip Already Exist'):addIpAddress(ipAddressArr, visitorIpAddress);
    })// end of ipLookup
    }).catch(err => {
        console.log('err', err)
    })
  
    res.sendStatus('ok')
});

const addIpAddress = (ipAddressArr, visitorIpAddress) => {
    db.collection('discover-mn').doc('visitors').update({
        ipAddress: [...ipAddressArr, visitorIpAddress]
    }).then(res => console.log('added new Ip Adress', res))
    .catch(err => console.log('err adding new ipAddress', err))
};//end of addIpAdress


module.exports = router;

