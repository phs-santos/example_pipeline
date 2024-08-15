const request = require('supertest')
const app = require('../../app')


describe('GET /', () => {
    it('Deve retornar 200', () => {
        request(app).get('/').expect(200).then(response => {
            expect(response.text).toEqual('Hello World!')
        })
    })
})

describe('POST /create', () => {
    it('Deve retornar 200', () => {
        request(app).post('/create').send({ name: 'John Doe', email: 'john.doe@teste.com' }).expect(200).then(response => {
            expect(response.body).toEqual({ status: 'success', message: 'Usuário criado com sucesso!' })
        })
    })

    it('Deve retornar 400', () => {
        request(app).post('/create').send({ name: '', email: '' }).expect(200).then(response => {
            expect(response.body).toEqual({ status: 'error', message: 'Parâmetros inválidos!' })
        })
    })
})
