const express = require('express');
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router();
const Boxcontroller = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')


routes.post('/boxes', Boxcontroller.store)
routes.get('/boxes/:id', Boxcontroller.show)
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)

module.exports = routes