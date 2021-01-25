// const app = require('express')();
const express = require('express');
const app = express();

// const mdb = require('./models/maindb');
// const pdb = require('./models/fuel');
const userRoute = require('./router/userRoutes');
const pumpRoute = require('./router/pumpRoutes');
const db = require('./conection');

app.get('/', (req, res) => {
    res.send('testing server')
});

//middleware
app.use(express.json());

app.use('/test', userRoute);
app.use('/pump', pumpRoute);



const PORT = 5000;
app.listen(PORT, () => { console.log("server is running on port:", PORT) });