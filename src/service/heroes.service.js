const axios = require('axios');

const heroesService = async (req, res) =>{
    try {
        const response =  await axios.get('https://www.superheroapi.com/api/1772667852942177/4');
        return response

    } catch (error) {   
        throw new Error(error);
    }
}

module.exports = {
    heroesService
}