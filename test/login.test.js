const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais validas', async () => {
            const bodyLogin = {...postLogin};
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
                 //remover o console.log depois de validar
            console.log('Status:', resposta.status);
            console.log('Resposta completa:', resposta.body);
           // console.log('Base URL:', process.env.BASE_URL);
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
            
                
        })

    })
}) 