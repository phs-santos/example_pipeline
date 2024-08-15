process.env.NODE_ENV = 'test';

const request = require('supertest')
const app = require('../app')
const db = require('../database')

describe('POST /users/create', () => {
    beforeAll(async () => await db._connect());
    afterAll(async () => await db.disconnect());

    it('Deve retornar 201 e mensagem de sucesso para usuário criado', async () => {
        const response = await request(app)
            .post('/users/create')
            .send({ name: 'John', email: 'john.doe@teste.com', password: '123456' })
            .expect(201);

        expect(response.body).toEqual({ message: "Usuário cadastrado com sucesso", status: true });
    });

    it('Deve retornar 400 e mensagem de erro para dados inválidos', async () => {
        const response = await request(app)
            .post('/users/create')
            .send({ name: '', email: '', password: '' })
            .expect(400);

        expect(response.body).toEqual({ message: "Preencha todos os campos", status: false });
    });

    it('Deve retornar 400 e mensagem de erro para senha menor que 6 caracteres', async () => {
        const response = await request(app)
            .post('/users/create')
            .send({ name: 'John Doe', email: 'john.doe@test.com', password: '123' })
            .expect(400);

        expect(response.body).toEqual({ message: "A senha deve conter no mínimo 6 caracteres", status: false });
    });

    it('Deve retornar 400 e mensagem de erro para email inválido', async () => {
        const response = await request(app)
            .post('/users/create')
            .send({ name: 'John Doe', email: 'john.doetestcom', password: '123456' })
            .expect(400);

        expect(response.body).toEqual({ message: "E-mail inválido", status: false });
    });
});

describe('GET ALL /users', () => {
    beforeAll(async () => await db._connect());
    afterAll(async () => await db.disconnect());

    it('Deve retornar 200 e uma lista de usuários', async () => {
        request(app).post('/users/create').send({ name: 'John Doe', email: 'john.doe@test.com', password: '123456' })

        const response = await request(app)
            .get('/users')
            .expect(200);

            console.log(response.body)

        expect(response.body.status).toBe(true);
        expect(response.body.data).toBeInstanceOf(Array);
    });

});