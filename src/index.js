const express = require('express')
const app = express()
const cors = require('cors')

const indexRoutes = require('./routes')
const textosRoutes = require('./routes/textos')

const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'
const PORTA = process.env.PORT || 5000

var corOptions = {
    "origin": CORS_ORIGIN,
    "methods": "GET,HEAD,POST",
}

app.use(cors(corOptions)) // Habilitando acesso de outra origem Cross-Origin Resource Sharing
app.use(express.urlencoded()) // Transforma o form em um objeto JavaScript

app.get('/', indexRoutes)
app.use('/textos', textosRoutes)

app.listen(PORTA)
