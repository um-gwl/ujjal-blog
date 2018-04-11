const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoUrl);

require('./models/Users');
require('./models/Posts');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const authRoutes = require('./routes/authRoutes');

authRoutes(app);

const postsRoutes = require('./routes/postsRoutes');
postsRoutes(app);

app.listen(5000);
