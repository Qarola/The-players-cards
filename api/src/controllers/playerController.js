const { Player } = require("../db");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
//const servicePlayer = require('../services/player');

const getAllPlayers = async (req, res) => {
  let { name } = req.query;
  console.log(name, "this is a query");
  if (name) {
    try {
      let playerDb = await Player.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      playerDb.sort((a, b ) => {
        return b.ranking - a.ranking;
      })
      return res.status(200).json(playerDb);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else {
    try {
      return await Player.findAll().then((data) => {
        if (data !== null) {
          data.sort((a, b) => {
            return b.ranking - a.ranking;
          });
        }
        res.status(200).send(data);
      });
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  }
};
 
const getPlayerByStatus = async (req, res) => {
  let { status } = req.query;
  console.log(status, 'this is a query');
  if (status === "active") {
    try {
      let allActive = await Player.findAll({
        where: {
          status: "active",
        },
      });
      allActive.sort((a, b ) => {
        return b.ranking - a.ranking;
      }) 
      return res.status(200).send(allActive);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  } else if (status === "inactive") {
    try {
      let allInactive = await Player.findAll({
        where: {
          status: "inactive",
        },
      });
      allInactive.sort((a, b ) => {
        return b.ranking - a.ranking;
      })
      return res.status(200).send(allInactive);
    } catch (error) {
      console.log(error);
      res.status(500);
      return;
    }
  }
};

//Add a palyer to DB...
const addPlayer = async (req, res) => {
    try {
  //const { id, name, status, ranking, avatar } = req.body;
  //const newPlayer = { id, name, status, ranking, avatar };
  const player = await Player.create(...req.body);
 return res.send(player);

    }
    catch (error) {
        console.log(error);
        res.status(500);
        return;
      }
};


module.exports = {
 getAllPlayers,
  getPlayerByStatus,
  addPlayer,
};