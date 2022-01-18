const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("player", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  }, {timestamps: false});
};

/* autoIncrement: true, */