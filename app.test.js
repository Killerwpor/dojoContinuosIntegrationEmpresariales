const app = require('./app');
const supertest = require('supertest');
const request = supertest(app); // Arrange


test('/iniciar', async done => {
    const response = await request.get('/iniciar?tipo=1&numero=1234'); // Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.respuesta).toBe("1,2,3,4");
    done();
});


test('/codebreaker', async done => {
    const response = await request.get('/codebreaker?numero=1235'); // Act
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.respuesta).toBe( " x x x x");
    done();
});

