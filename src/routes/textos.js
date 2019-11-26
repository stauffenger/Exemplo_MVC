const express = require('express')
const router = express.Router()
const textos = require('../models/model_textos')
const textosView = require('../views/textos')

router.get('/', async (request, response, next) => {
    await textos.getTextos()
    .then((texto) => textosView.imprimirTextos(response, texto))
    .catch(erro => console.error("Erro ao tentar imprimir texto.", erro))
})

router.post('/', async (request, response, next) => {
    let titulo = request.body.titulo
    let texto = request.body.texto
    response.json(await textos.postTextos(titulo, texto))
    response.sendFile("/views/textos.html", {root: './src'})
})

module.exports = router