let { Type } = require('../models/models')
let ApiError = require('../error/ApiError')

class TypeController{
    async create(req, res) {
        let { name } = req.body
        let type = await Type.create({ name })
        return res.json(type)
        
    }

    async getAll(req, res) {
        let types = await Type.findAll()
        return res.json(types)
        
    }

}
module.exports = new TypeController()
