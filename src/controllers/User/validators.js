const UserValidators = {
    create(body) {
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return { message: 'Preencha todos os campos', status: 400 }
        }

        if (password.length < 6) {
            return { message: 'A senha deve conter no mínimo 6 caracteres', status: 400 }
        }

        if (!email.includes('@') || !email.includes('.')) {
            return { message: 'E-mail inválido', status: 400 }
        }

        return { message: 'Usuário válido', status: 200 }
    }
}

module.exports = UserValidators;