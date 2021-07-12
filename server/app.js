const express = require('express');

const userRouter = require('./Routes/userRoutes');
const app = express();

app.use('/users', userRouter);

module.exports = app;