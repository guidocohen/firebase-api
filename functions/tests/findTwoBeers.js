const request = require('supertest');
const assert = require('chai').assert;
const findTwoBeers = require('../routes/findTwoBeers');

/* Inicialización de variables de prueba */
//const apiURL = 'https://us-central1-siempre-en-casa-f035d.cloudfunctions.net/app/api/'; // cloud api (disponible)
const apiURL = 'http://localhost:5000/siempre-en-casa-f035d/us-central1/app/api'; // firebase serve (para disponibilizar el servicio local)
const beersJSON = '[15, 20, 25, 39, 12, 18, 19, 21]';
const beersJSONWithNegativesValues = '[-10, 23, 13, 6, 58, 9]';
const targetJSON = '35';
const data = { beers: beersJSON, target: targetJSON };
const dataWithNegativesValues = { beers: beersJSONWithNegativesValues, target: targetJSON };

// Se guarda el resultado en indexList para reutilizar el resultado.
const indexList = findTwoBeers.findTwoBeers(beersJSON, targetJSON);

// Test 1)
describe('Test function findTwoBeers - deepStrictEqual', function() {
    it('Retorna los index 0 y 1', function() {
        assert.deepStrictEqual(indexList, [0, 1]);
    });
});

// Test 2)
describe('Test function findTwoBeers - notEqual', function() {
    it("Retorna [0, 1] != []", function() {
        assert.notEqual(indexList, []);
    });
});

// Test 3)
describe('Test function findTwoBeers - Equal', function() {
    it('Retorna un array vacío', function() {
        const indexList_empty = findTwoBeers.findTwoBeers("[10, 23, 13, 6, 58, 9]", targetJSON)
        assert.deepStrictEqual(indexList_empty, []);
    });
});

// Test 4)
describe('Test function validateNotPositiveBeers - Equal', function() {
    it('Retorna false', function() {
        const existNotPositiveValues = findTwoBeers.validateNotPositiveBeers(beersJSONWithNegativesValues)
        const existZeroValues = findTwoBeers.validateNotPositiveBeers("[10, 23, 13, 6, 0, 9]")
        assert.deepStrictEqual(existNotPositiveValues, true);
        assert.deepStrictEqual(existZeroValues, true);
    });
});

// Test 5)
describe('Test POST /findTwoBeers 200', () => {
    it('OK: Responde un JSON que contiene los índices de los valores.', done => {
        request(apiURL)
            .post('/findTwoBeers')
            .send(data)
            .type('form')
            .set('Accept', /json/)
            .expect({ "index": [0, 1] })
            .expect(200, done);
    });
});

// Test 6)
describe('Test GET /findTwoBeers 404', () => {
    it('Método incorrecto: Responde con el error 400 por petición incorrecta.', done => {
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

// Test 7)
describe('Test POST /findTwoBeers 400', () => {
    it('Beers y/o target vacíos: Responde con el error 400 y con el mensaje de error.', done => {
        request(apiURL)
            .post('/findTwoBeers')
            .send('')
            .type('form')
            .set('Accept', /json/)
            .expect('Petición no reconocida. Por favor ingrese una lista IBU (beers) y su objetivo (target).')
            .expect(400)
            .end((error) => {
                return error ? done(error) : done();
            });
    });
});

// Test 8)
describe('Test POST /findTwoBeers 400', () => {
    it('Valores no positivos: Responde con el error 400 y con el mensaje de error.', done => {
        request(apiURL)
            .post('/findTwoBeers')
            .send(dataWithNegativesValues)
            .type('form')
            .set('Accept', /json/)
            .expect('Petición fallida. Por favor ingrese una lista IBU (beers) con valores únicamente positivos.')
            .expect(400)
            .end((error) => {
                return error ? done(error) : done();
            });
    });
});