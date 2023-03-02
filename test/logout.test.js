import index from '../index.js'
import request from 'supertest'

describe('Test all routes',() =>{
  // let mongoServer;
  let server;
  beforeAll(async () =>{
    server = index.listen(2000);
  })
  afterAll((end) =>{
    server.close(end)
  })
 test('test logout Route', async () =>{
  const response = await request(index).post('/logout');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({message:"You are logged out"})
 })

})










