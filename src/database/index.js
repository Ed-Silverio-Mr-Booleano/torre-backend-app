import Sequelize from 'sequelize';

import User from '../app/models/User';
import Proficiency from '../app/models/Proficiency';
import Skill from '../app/models/Skill';

import databaseConfig from '../config/database';

const models = [User, Skill, Proficiency]

class Database {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database();
