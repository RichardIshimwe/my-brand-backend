import index from '../src/index_test.js'
import request from 'supertest'

describe('Test all routes',() =>{
 test('test logout Route', async () =>{
  const response = await request(index).post('/logout');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({message:"You are logged out"})
 })
})










