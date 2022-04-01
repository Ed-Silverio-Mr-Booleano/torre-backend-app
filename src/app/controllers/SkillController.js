import User from "../models/User";
import Skill from '../models/Skill';
import Proficiency from "../models/Proficiency";



class SkillController {

    async index(req, res) {
        const skill = await Skill.findAll({
            attributes: ['id', 'skill'],
            include: [
                {
                    model: User,
                    as: 'users',
                    through: { attributes: []},
                    attributes: ['id','username','role']
                }
            ]
            
        })
        return res.json(skill);
    }

    async show (req, res) {
         const skill_id = req.params.skill_id;
         const skill = await Skill.findOne({
            where:{id: skill_id},
            attributes: ['id', 'skill'],
            include: [
                {
                    model: User,
                    as: 'users',
                    through: { attributes: []},
                    attributes: ['id','username','role']
                }
            ]
            
        })
        return res.json(skill);
    }
    async store(req, res) {
        
    }

    async update(req, res) {
        
    }

    async delete() {
        
    }
}

export default new SkillController();