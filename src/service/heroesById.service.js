const axios = require('axios');

const heroesServiceById = async (req, res) => {
    try {
        const https = 'https://';
        const url = 'www.superheroapi.com/api/';
        const apiKey = req.headers.apikey;
        const id = '/' + req.body.id;

        const response = await axios.get(`${https}${url}${apiKey}${id}`);
        
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    heroesServiceById
}