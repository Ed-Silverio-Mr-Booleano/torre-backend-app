import Sequelize, { Model } from 'sequelize';

class Proficiency extends Model {

    static init(sequelize) {
        super.init({
            proficiency: Sequelize.STRING,
            
        },
        {
            sequelize,
            tableName: 'proficiencies'
        }
        );

        return this;

    }
    static associate(models){
        this.belongsToMany(models.Skill, {
            through: 'user_skill',
            as: 'skills',
            foreignKey: 'proficiency_id'
        })
    }

}



export default Proficiency;