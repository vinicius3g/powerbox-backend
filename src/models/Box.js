const mongoose = require('mongoose');
const Box = new mongoose.Schema(//schema funciona como uma tabela no mongo db
    {
        //quais campos vão ter dentro da minha box
        title: {
            type: String,
            required: true //define que o titulo é sempre obrigatorio
        },
        //o files esta dentro de box pois um bx tera varios files
        files: [{
            type: mongoose.Schema.Types.ObjectId, ref: "File"
        }]
    },
    {
        timestamps: true//cria um campo chamado createdat="armazena a data de criação do registro" e outro updatedat="armazena a daat de edição " em cada res=gistro da minha tabela
    }
)
module.exports = mongoose.model("Box", Box)