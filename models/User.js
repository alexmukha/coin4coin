module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      date: DataTypes.STRING
    });
    return User;
  };