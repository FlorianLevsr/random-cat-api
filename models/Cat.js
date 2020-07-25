const client = require('./client');

module.exports = class Cat {

    static async findAll() {

        const result = await client.query('SELECT * FROM get_cats()');
        return result.rows;

    }
    
    static async findOneByPK(cat_id) {

        const result = await client.query('SELECT * FROM "cat" WHERE id = $1', [cat_id]);
        return result.rows[0];

    }

    static async findRandomOne() {

        const result = await client.query('SELECT * FROM get_random_cat()');
        return result.rows[0];

    }
};