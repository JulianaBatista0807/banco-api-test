const request = require('supertest');
const { expect } = require('chai')

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais validas', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                 })
                 //remover o console.log depois de validar
            console.log('Status:', resposta.status);
            console.log('Resposta completa:', resposta.body);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
                
        })

    })
}) 