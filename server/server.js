const mongoose = require('mongoose');
const app = require('./app');


const connectionString = 'mongodb://localhost:27017/DB'
// const connectionString = 'mongodb://database:27017/DB'

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>{
    console.log('connected to the database');
})
.catch( err => {
    console.log(`something went wrong ${err}`);
})



app.get("/", (req, res) => {
    res.json({ message: "Hello From Backend" });
});



// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});