const Category = require('../models/Category');

module.exports = {

    getAll: async (_, response) => {
        response.json({
            data: await Category.findAll()
        });
    },

    getOne: async (request, response) => {
        response.json({
            data: await Category.findOneByPK(request.params.id)
        });
    },

};