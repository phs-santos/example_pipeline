const User = require('../../models/User');
const UserValidators = require('./validators');

const UserController = {
    async post(req, res) {
        try {
            const { name, email, password } = req.body;
            const validate = UserValidators.create({ name, email, password });

            if (validate.status !== 200) return res.status(validate.status).json({ message: validate.message, status: false })

            const user = await User.create({ name, email, password });
            if (!user) return res.status(400).json({ message: 'Erro ao cadastrar usuário', status: false })

            return res.status(201).json({ message: 'Usuário cadastrado com sucesso', status: true })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro interno', status: false })
        }
    },

    async getAll(req, res) {
        try {
            const users = await User.find();
            if (!users) return res.status(404).json({ message: 'Nenhum usuário encontrado', status: false })

            return res.status(200).json({ status: true, data: users })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro interno', status: false })
        }
    }
}

module.exports = UserController;