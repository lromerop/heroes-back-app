const { heroesByIdModule } = require('../modules/heroesById.modules');

const heroesByIdController = async (req, res) => {
    try {
        const response = await heroesByIdModule(req, res);
        return res.send(response);
    } catch (error) {
        return new Error(error);
    }
}

module.exports = {
    heroesByIdController
}