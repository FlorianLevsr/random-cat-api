const Cat = require('../models/Cat');

module.exports = {

    getAll: async (_, response) => {
        response.json({
            data: await Cat.findAll()
        });
    }

};