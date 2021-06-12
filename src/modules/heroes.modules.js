const { heroesService } = require('../service/heroes.service');

const heroesModule = async (req, res) => {
    try {
         const response = await heroesService(res, req);
         return response;
    } catch (error) {
        const err = {
            status: error.statusCode,
            text: '¡Ups!, Algo salio mal' 
        }
        throw new Error(err);
    }
}

module.exports = {
    heroesModule
}