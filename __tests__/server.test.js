'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);

describe('Server', () => {
  // test();
  // it();
  it( 'handles the root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('hello');
  });

  test('handle success', async () => {
    const response = await request.get('/success');
    
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Success!!');
  });
  
  test('handle bad', async () => {
    const response = await request.get('/bad');    
    expect(response.status).toBe(500);
  });

  test('handles not found', async () => {
    const response = await request.get('/testTest');
    expect(response.status).toEqual(404);
  });
});

