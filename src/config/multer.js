//fornece uma forma do controller acessar os aruivos enviados pelo front 
const multer = require('multer');
const path = require('path')
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),//resolve os probles na hora de escolher o caminhos dentro do node
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'))
        },
        filename: (req, file, cb) => {//determina que nome o arquivo vai ficar salvo dentro do projeto
            //gera 16bytes de caracteres aleatorios
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`; //deixa os arquivos nesse formato 51ds5d1s-teste.doc

                cb(null, file.key)
            })
        }
    })
};