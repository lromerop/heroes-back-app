const { heroesModule } = require('../modules/heroes.modules');

const heroesController = async (req, res) => {
    try {
        const response = await heroesModule(res, req);
        return res.send(response.data);
    } catch (error) {
        return new Error(error)
    }
}

module.exports = {
    heroesController
}