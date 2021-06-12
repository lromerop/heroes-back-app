const { heroesServiceById } = require('../service/heroesById.service');

const formatResponse = (response) => {
    const res = {
        name : response.name,
        image : response.image.url,
        id : response.id,
        powerstats: response.powerstats 
    }
    return res;
}

const heroesByIdModule = async (req, res) => {
    try {
        const data = await heroesServiceById(req, res);
        const response = formatResponse(data.data);
        return response;
    } catch (error) {
        const err = {
            status: error.statusCode,
            text: 'Ups!, Algo salio mal'
        }
        throw new Error(error);
    }
}

module.exports = {
    heroesByIdModule
}
