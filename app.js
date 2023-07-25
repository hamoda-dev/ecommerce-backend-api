const express = require('express');

const passport = require('passport');

require('dotenv').config();

const app = express();

// passport config
require('./config/passport')(passport);

// initialize passport
app.use(passport.initialize());

// Json Parser
app.use(express.json());

app.use('/api/dashboard', require('./routes/dashboard/auth/auth.route'));

module.exports = app;
