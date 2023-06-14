const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Episode", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allownull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
  });
};
