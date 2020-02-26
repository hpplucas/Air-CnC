const express = require('express');
const routes = require('./routes.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user>:<password>@cluster-l7qly.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Backend running');
});
