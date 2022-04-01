module.exports = {
    async up (queryInterface, Sequelize) {
      return queryInterface.createTable('skills', { 
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
         },
         skill: {
            type: Sequelize.STRING,
            allowNull: false
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
      return queryInterface.dropTable('skills');
    }
  };
  