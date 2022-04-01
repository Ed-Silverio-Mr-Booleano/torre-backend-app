module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user_skills', { 
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
       },
       skill_id: {
         type: Sequelize.INTEGER,
         references: {model: 'skills', key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL'
       },
       proficiency_id: {
        type: Sequelize.INTEGER,
        references: {model: 'proficiencies', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    return queryInterface.dropTable('user_skills');
  }
};

