const client = require('./client');

module.exports = class Cat {

    static async findAll() {

        // récupération de tous les chats grâce à la vue sql all_cats
        const result = await client.query('SELECT * FROM all_cats');
        return result.rows;

    }
    
    static async findOneByPK(cat_id) {

        const result = await client.query('SELECT * FROM search_cat_by_id($1)', [cat_id]);
        return result.rows[0];

    }

    static async findRandomOne() {

        // récupération d'un chat aléatoire grâce à la vue sql random_cat
        const result = await client.query('SELECT * FROM random_cat');
        return result.rows[0];

    }

    static async findOnesByCategory(category_id) {

        const result = await client.query('SELECT * FROM "cat" JOIN "category" ON category_id = category.id WHERE category_id = $1', [category_id]);
        return result.rows;
    }

    static async searchOne(user_request) {

        const result = await client.query('SELECT * FROM search_cat($1)', [user_request]);

        if (result.rowCount <1) {
            result.rows[0] = "Aucun résultat";
        }
        
        return result.rows;
    }

    
};