const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
//const bodyParser = require('body-parser');
require('dotenv').config();

//app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('../server/config/mongoose.config');

console.log(process.env.SECRET_KEY);

const academiasRoute = require('../server/routes/academias.routes');

academiasRoute(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));



