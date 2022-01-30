module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Urls', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    initial_url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    url_short: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Urls')
};
