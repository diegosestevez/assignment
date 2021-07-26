const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const assignRouter = require('./Routes/assignmentRoutes');
const userRouter = require('./Routes/userRoutes');
const app = express();
require('dotenv').config();


//CORS//
var corsOptions = {origin: "http://localhost:3000"};
app.use(cors(corsOptions));


//BodyParser//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//JWT Auth//
app.use((req, res, next) => {
    var token = req.headers['authorization'];
    if(!token) return next ();

    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(401).json({
                error: true,
                message: 'Invalid user'
            });
        }else{
            req.user = user;
            next();
        }
    })
})

//ROUTES//
app.use('/users', userRouter);
app.use('/assign', assignRouter);


module.exports = app;