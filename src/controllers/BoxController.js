const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create(req.body)
        return res.json(box);
    }
    async show(req, res) {                                   //traz todos os ids na pesquisa
        const box = await (await Box.findById(req.params.id)).populate({
            path: 'files',
            options: { sort: { createdAt: -1 } }//ordena de forma decrescente
        })

        return res.json(box)
    }
}

module.exports = new BoxController();