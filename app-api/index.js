const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');

const authRoutes = require('./routes/auth');

// middleware
app.use(express.json());

// routes
app.use('/api/user/', authRoutes);

env.config();

// connect to db
const connstr = process.env.DB_CONNECT;
mongoose.connect(connstr, 
    { useNewUrlParser: true },
    () => {
    console.log('Connected to MongoDB');
});

app.listen(3030, () => {
    console.log('Server running on port 3030.')
})