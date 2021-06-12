const  { heroesController } = require('../controller/heroes.controller');
const  {heroesByIdController} = require('../controller/heroesById.controller');
const { Router } =require('express');
const router = Router();

router.get('/heroes', heroesController);
router.post('/heroesById', heroesByIdController);

module.exports = router;
