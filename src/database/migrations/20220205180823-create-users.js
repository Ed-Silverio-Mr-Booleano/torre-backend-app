module.exports = {
   async up (queryInterface, Sequelize) {
     return queryInterface.createTable('users', { 
        id: {
           type: Sequelize.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
        },
        username: {
           type: Sequelize.STRING,
           allowNull: false
        },
        photo: {
           type: Sequelize.STRING,
           allowNull: true,
        },
        role: {
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
     return queryInterface.dropTable('users');
   }
 };
 