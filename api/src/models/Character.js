const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Character", {
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
    image: {
      type: DataTypes.STRING,
      allownull: false,
    },
  });
};
