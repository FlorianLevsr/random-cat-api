require('dotenv').config();
const express = require('express');

const catRouter = require('./router/catRouter');

const app = express();

app.use(express.json());

app.use('/api/v1', catRouter);

const port = process.env.PORT || 3000;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});