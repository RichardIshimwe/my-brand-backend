import index from '../index.js'
import supertest from 'supertest'
import signup from '../src/models/signup.models.js'
 const router = supertest(index);

describe('Test all routes',() =>{
  let server;
  beforeAll(async () =>{
    server = index.listen(2000);
  })
  afterAll((end) =>{
    server.close(end)
  })

 test('Logout', async () =>{
  const response = await router.post('/logout');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({message:"You are logged out"});
 })

})










