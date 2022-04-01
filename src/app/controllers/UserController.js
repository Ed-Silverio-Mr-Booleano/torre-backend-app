import User from "../models/User";
import Skill from '../models/Skill';
import Proficiency from "../models/Proficiency";



class UserController {

    async index(req, res) {
    
        const user = await User.findAll({
            attributes: ['id', 'username', 'role'],
            include: [
                {
                    model: Skill,
                    as: 'skills',
                    through: { attributes: []},
                    attributes: ['id', 'skill']
                }
            ]
            
        })
        return res.json(user);
    }

    async show (req, res) {

    }
    async store(req, res) {
        
    }

    async update(req, res) {
        
    }

    async delete() {
        
    }
}

export default new UserController();