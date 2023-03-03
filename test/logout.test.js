import index from '../index.js'
import supertest from 'supertest'

describe('Test all routes',() =>{

 test('Logout', async () =>{
   const response = await supertest(index)
   .post('/logout')
   .expect(200);
   expect(response.body.message).toEqual("You are logged out");
 })

})










