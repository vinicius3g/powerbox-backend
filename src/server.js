const express = require('express'); //importando o express
const mongoose = require('mongoose');
const path = require('path')
const App = express();
const cors = require('cors')
const server = require('http').Server(App)

const io = require('socket.io')(server)

App.use(cors())

// passando o express para App

io.on('connection', socket => {//quando reeber uma conexao no websocket quando o usuario abrir o app no front ele vai ser alocado para uma sala diferente das outras pessoas conectada no mesmo app, nao podendo ver uploads de outars pessoas e nem as outras dele.
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

mongoose.connect('mongodb+srv://dbBox:dbbox159@cluster0-xsp5g.mongodb.net/mybox?retryWrites=true&w=majority', {
    useNewUrlParser: true,//passando para que o monggose entenda que esse sera o modo de url usada
    useUnifiedTopology: true
});

App.use((req, res, next) => {
    req.io = io;
    return next()//processa o middleware e passa para o restante das rotas e o resto da aplicação
})

App.use(express.json())// o use serve para quando eu quero cadastar infrmações dentro do meu express//vai ajudar o servidor a entender as requisições feitas no formato json
App.use(express.urlencoded({ extended: true }))//permite o envio de arquvos nas requisitions
App.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))//toda a vez que se reeber uma requisição na rota files vai ser buscado os arquivos fisicos da pasta tmp
App.use(require('./routes'))//caminho do routes 

server.listen(8080)// recebe requisições tanto http quando websocket