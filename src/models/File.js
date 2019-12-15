const mongoose = require('mongoose');

const File = new mongoose.Schema({//schema funciona como uma tabela no mongo db  
    //quais campos vão ter dentro da minha box
    title: {
        type: String,
        required: true //define que o titulo é sempre obrigatorio
    },
    path: {//nomde do arquivo fisico armazenado na  aplicação//guarda o caminho para o backend encontrar o arquivo
        type: String,
        required: true //define que o titulo é sempre obrigatorio
    },

}, {
    timestamps: true,//cria um campo chamado createdat="armazena a data de criação do registro" e outro updatedat="armazena a daat de edição " em cada res=gistro na tabela
    //toda vez que o arquivo for convertido em objeto ou json ele fara o carregamento virtual automaticamente
    toObject: { virtuals: true },//
    toJSON: { virtuals: true }
})
//campo virtual nao exixte no banco de no lado do banco de dados mais sim do lado do backend auxiliando o front nas suas buscas
File.virtual('url').get(function () {
    return `http://localhost:8080/files/${encodeURIComponent(this.path)}`
})
module.exports = mongoose.model("File", File)