const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json('Bem vindo a aplicação')
})

module.exports = app