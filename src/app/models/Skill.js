import Sequelize, { Model } from 'sequelize';

class Skill extends Model {

    static init(sequelize) {
        super.init({
            skill: Sequelize.STRING,
           
        },
        {
            sequelize,
            tableName: 'skills'
        }
        );

        return this;

    }

    static associate(models) {
        this.belongsToMany(models.User, {
            through: 'user_skills',
            as: 'users',
            foreignKey: 'skill_id'
        });
        this.belongsToMany(models.Proficiency,{
            through: 'user_skills',
            as: 'proficiencies',
            foreignKey: 'skill_id'
        });
    }
}



export default Skill;