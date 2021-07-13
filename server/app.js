const express = require('express');
const assignRouter = require('./Routes/assignmentRoutes');
const userRouter = require('./Routes/userRoutes');
const app = express();

app.use('/users', userRouter);
app.use('/assign', assignRouter);

module.exports = app;