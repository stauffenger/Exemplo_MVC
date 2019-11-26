const express = require('express')
const router = express.Router()

router.get('/', (request, response, next) => {
    response.sendFile("/views/index.html", {root: './src'})
})

module.exports = router