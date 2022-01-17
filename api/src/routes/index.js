const { Router } = require('express');
const { getAllPlayers, addPlayer, getPlayerByStatus } = require('../controllers/playerController');
const router = Router();



router.get("/players", getAllPlayers)

router.get('/byStatus', getPlayerByStatus);

router.post('/add', addPlayer);


module.exports = router;

