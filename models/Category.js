const client = require('./client');

module.exports = class Category {

    static async findAll() {

        const result = await client.query('SELECT * FROM get_categories()');
        return result.rows;

    }
    
};