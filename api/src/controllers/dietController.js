const { Diet } = require('../db');



function getAllDiets(req, res, next) {
    Diet.findAll()
    .then(data => {
        if(data !== null) {
            res.send(data)
        }
    })
    .catch((error) => next(error))
};



module.exports = {
    getAllDiets
}