const Cat = require('../models/Cat');

module.exports = {

    getAll: async (_, response) => {
        response.json({
            data: await Cat.findAll()
        });
    },

    getOne: async (request, response) => {
        response.json({
            data: await Cat.findOneByPK(request.params.id)
        });
    },

    getRandomOne: async (_, response) => {
        response.json({
            data: await Cat.findRandomOne()
        });
    },

    getOnesByCategory: async (request, response) => {
        response.json({
            data: await Cat.findOnesByCategory(request.params.id)
        });
    },

    searchOne: async (request, response) => {
        response.json({
            data: await Cat.searchOne(request.params.userRequest)
        })
    }
    
};