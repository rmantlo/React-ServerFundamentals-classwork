//in the node module file

require('dotenv').config() //imports .env modules and our specific .env file
const express = require('express'); //calls express from node modules, like how we imported with react
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const pies = require('./controllers/piecontroller');
const users = require('./controllers/usercontroller');

//.env is an environment file, where we put secrets
db.sync(); //to delete database/resetting tables, put {force: true} in the sync and save (remember to change db infomation in other files first) then remove the force and resave to recreate
app.use(require('./middleware/headers'))

app.use(bodyParser.json()); //
app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`)) //listen for requests on 3000, and the callback is the response, so we send back the console.log

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.use('/pies', pies);
app.use('/auth', users);

