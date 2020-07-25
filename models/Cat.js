const client = require('./client');

module.exports = class Cat {

    static async findAll() {

        const result = await client.query('SELECT * FROM get_cats()');
        return result.rows;

    }
    
    
};