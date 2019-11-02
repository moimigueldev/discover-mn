const express = require('express'),
        router = express.Router(),
        request = require('request');

const eventbrite = require('eventbrite');




// const sdk = eventbrite({token: '3W3SNOKL3CGJTMTQTPT4'});
// const sdk = eventbrite({token: 'KBHTPAXC4ORL534PFWFZ'});

const headers = {
    Authorization: "Bearer KBHTPAXC4ORL534PFWFZ"
};

router.get('/', async (req, res) => {
    
    console.log('events url hit');

    // res.redirect('https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=UVPDPF5YNEC545ZKPDPCC6TC5TIFLX64SX5LLHU4OWVN254HRA&redirect_uri=http:www.google.com')

    // request.get('https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=UVPDPF5YNEC545ZKPDPCC6TC5TIFLX64SX5LLHU4OWVN254HRA&redirect_uri=http://localhost:4200/eventsmn',  (err, httpResponse, body) => {
    //     console.log(httpResponse)
    //     res.send(httpResponse)
    // })

    res.sendStatus(200)
  
})


module.exports = router;

