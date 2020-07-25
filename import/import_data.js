require('dotenv').config();

const { Client } = require('pg');

const categories = require('../data/categories.json');
const cats = require('../data/cats.json');

( async () => {

    const client = new Client();
    await client.connect();

    console.log('Cleaning tables category, cat');
    await client.query('TRUNCATE TABLE "category", "cat" RESTART IDENTITY');

    console.log('Client connected');

    const categoryIdMap = {};

    console.log('Processing: categories.json');

    for (let category of categories) {

        const result = await client.query('INSERT INTO "category" ("label") VALUES ($1) RETURNING "id"', [category.label]);

        const categoryId = result.rows[0].id;

        categoryIdMap[category.label] = categoryId;
    }

    console.log('Processing: cats.json');

    for (let cat of cats) {

        const query = {
            text: 'INSERT INTO "cat" ("category_id", "img", "description") VALUES ($1, $2, $3)',
            values: [categoryIdMap[cat.category], cat.img, cat.description]
        }

        await client.query(query);
    }

    console.log('Data import OK')
    client.end();

})();