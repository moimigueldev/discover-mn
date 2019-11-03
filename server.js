const express = require('express');
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    request = require('request');


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/discover-mn')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    


const index = require('./routes/index'),
    visitor = require('./routes/visitor');



app.use('/', index);
app.use('/api/visitor', visitor);



app.listen(port, (req, res) => {
    
    console.log(`listening on port: ${port}`);
});