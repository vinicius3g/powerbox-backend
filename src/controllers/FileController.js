const File = require('../models/File');
const Box = require('../models/Box')
class FileController {
    async store(req, res) {
        const box = await Box.findById(req.params.id);//busca dos ids 

        const file = await File.create({
            title: req.file.originalname, //original name do multerconfig 
            path: req.file.key,// file key que esta  no multerconfig
        })

        box.files.push(file) //inclusao do novo file criado dentro de box
        await box.save()

        req.io.sockets.in(box._id).emit('file', file)

        return res.json(file)//retorna o file recem criado 
    }
}

module.exports = new FileController();