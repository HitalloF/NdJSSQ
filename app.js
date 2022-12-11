const express = require('express');
const ClienteRouter = require('./src/routes/ClienteRoutes')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require('./src/database')

app.use(ClienteRouter)




app.listen(3000)