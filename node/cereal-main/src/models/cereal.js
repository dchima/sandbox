module.exports = (sequelize, DataTypes) => {
  const Cereal = sequelize.define(
    'Cereal',
    {
      cereal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Cereal.associate = (models) => {

  };
  return Cereal;
};
