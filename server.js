require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendRoute = require('./route');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/send', sendRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app running on port: ${port}`);
});
