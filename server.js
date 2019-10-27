require('dotenv').config()
const express = require('express');
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 3000;


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/discover-mn')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    

const index = require('./routes/index'),
    events = require('./routes/events');


app.use('/', index);
app.use('/events', events);

app.listen(port, () => {
    console.log(`listening on ports: ${port}`);
    
});