const client = require('./client');

module.exports = class Category {

    static async findAll() {

        const result = await client.query('SELECT * FROM get_categories()');
        return result.rows;

    }

    static async findOneByPK(category_id) {

        const result = await client.query('SELECT * FROM "category" WHERE id = $1', [category_id]);
        return result.rows[0];

    }
    
};