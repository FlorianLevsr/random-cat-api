require('dotenv').config();
const express = require('express');

const catRouter = require('./router/catRouter');
const categoryRouter = require('./router/categoryRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/cats', catRouter);
app.use('/api/v1/categories', categoryRouter);

const port = process.env.PORT || 3000;
app.listen(port, _ => {
    console.log(`Listening on ${port}`);
});