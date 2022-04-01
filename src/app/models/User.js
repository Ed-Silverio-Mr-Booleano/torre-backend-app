import Sequelize, { Model} from 'sequelize';
import bcrypt from 'bcryptjs';
class User extends Model {
    static init(sequelize){
        super.init({
            username : Sequelize.STRING,
            photo: Sequelize.STRING,
            role: Sequelize.STRING,

    

        },
        {
            sequelize,
        }
        );
        
        return this;
    }


   static associate(models){
       this.belongsToMany(models.Skill, {
           through: 'user_skills',
           as: 'skills',
           foreignKey: 'user_id'
       })
   }
   
}

export default User;