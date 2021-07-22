const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config()


const connectionString = process.env.DB_DOCKER
// const connectionString = process.env.DB_LOCAL

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>{
    console.log('connected to the database');
})
.catch( err => {
    console.log(`something went wrong ${err}`);
})



app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello From The Backend" });
});



// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});