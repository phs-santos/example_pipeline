const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

routes.post('/create', (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ status: 'error', message: 'Parâmetros inválidos!' })
    }

    res.json({ status: 'success', message: 'Usuário criado com sucesso!' })
})

module.exports = routes