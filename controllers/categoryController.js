const Category = require('../models/Category');

module.exports = {

    getAll: async (_, response) => {
        response.json({
            data: await Category.findAll()
        });
    },

};