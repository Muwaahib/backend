
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const custumers = require ('./Routes/custumersRoutes')

// middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/custumers',custumers)

// LISTEN THE SERVER
app.listen(port, () => console.log('Serving running on port 5000 '));
