const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with JSON containing message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello from DevOps demo');
  });
});

describe('GET /health', () => {
  it('health check ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
