module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('proficiencies', { 
       
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      proficiency: {
          type: Sequelize.STRING,
          allowNull: false,
       },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
       },
       updated_at: {
          type: Sequelize.DATE,
          allowNull: false
       }
    
    });
     
  },

  async down (queryInterface) {
    return queryInterface.dropTable('proficiencies');
  }
};

