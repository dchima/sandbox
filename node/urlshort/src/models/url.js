module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define(
    'Url',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      initial_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url_short: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Url.associate = () => {

  };
  return Url;
};
