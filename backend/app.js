const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db') 

const app = express();//Création d'une application express







db.sync().then(console.log("Connected!")).catch(error => console.log(error))



app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, text/html,  Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use(cors());








module.exports = app;//Export de l'application express 