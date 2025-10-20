const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTranferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token
        beforeEach(async() => {
            token = await obterToken('julio.lima', '123456');
        })

        it('Deve retornar sucesso com 201 quando o valor da transfêrencia for igual ou acima de R$10,00', async () => {
            const bodyTransferencias = {...postTranferencias};  
            const resposta = await request(process.env.BASE_URL)
                    .post('/transferencias')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${token}`)
                    .send({
                        'contaOrigem': 1,
                        'contaDestino': 2,
                        'valor': 11,
                        'token': ""
                    });

                        expect(resposta.status).to.equal(201);
                        console.log('Status:', resposta.body);
        });

        it('Deve retornar erro com 422 quando o valor da transfêrencia for abaixo de R$10,00', async () => { 
            
            const resposta = await request(process.env.BASE_URL)
                    .post('/transferencias')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${token}`)
                    .send({
                        'contaOrigem': 1,
                        'contaDestino': 2,
                        'valor': 7,
                        'token': ""
                    });

                        expect(resposta.status).to.equal(422);
                        console.log('Status:', resposta.body); 
    });
});
});