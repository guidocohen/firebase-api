const request = require('supertest');
const assert = require('assert').strict;
const findTwoBeers = require('../routes/findTwoBeers');

//const apiURL = "https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/";
const apiURL = "http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api"; // firebase serve
const beersJSON = '[15, 20, 25, 39, 12, 18, 19, 21]';
const targetJSON = '35';
const data = { beers: beersJSON, target: targetJSON };
/*
describe("Function", function() {
    it("Retorna los index 0 y 1", function() {
        const indexList = findTwoBeers("[12, 21, 25, 20, 15, 18, 19, 21]", targetJSON);
        assert.equal(indexList, 2);
    });
});
*/
describe("POST /findTwoBeers 200", () => {
    it('Responde un JSON que contiene los índices de los valores', done => {
        request(apiURL)
            .post('/findTwoBeers')
            .send(data)
            .type('form')
            .set('Accept', /json/)
            .expect({ "index": [0, 1] })
            .expect(200, done);
    });
});

describe("GET /findTwoBeers 404", () => {
    it('Responde con el error 400 por petición incorrecta', done => {
        request(apiURL)
            .get('/findTwoBeers')
            .send(data)
            .type('form')
            .set('Accept', /json/)
            .expect(404)
            .end((error) => {
                return error ? done(error) : done();
            });
    });
});

describe("POST /findTwoBeers 400", () => {
    it('Responde con el error 400 y con el mensaje de error', done => {
        request(apiURL)
            .post('/findTwoBeers')
            .send('')
            .type('form')
            .set('Accept', /json/)
            .expect('Petición no reconocida. Por favor, ingrese una lista IBU (beers) y su objetivo (target)')
            .expect(400)
            .end((error) => {
                return error ? done(error) : done();
            });
    });
});