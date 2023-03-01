// import file from '../src/routes/logout.routes.js'
// import request from 'supertest'

// describe('GET request /',() =>{
//   let server;
  
//   beforeAll(() =>{
//     server = file.listen(3000);
//   })
//   afterAll((done) =>{
//     server.close(done);
//   })
// test('respond this is test', async () =>{
//   const response = await request(file).get('/');
//   expect(response.status).toBe(200);
//   // expect(response.body).toEqual({message:"this is the test"})
// });
// });

// import logout from '../src/routes/logout.routes.js'

// import request from 'supertest'

// describe('Logout Test', () =>{

//   let server;
//   beforeAll(()=>{
//    server = logout.listen(3001);
//   })
//   // afterAll((end)=>{
//   //  server.close(end);
//   // })

//   test('If user is logged out successful', async () =>{
//  const response = await request(logout).post('/');
//  expect(response.status).toBe(200);
//   });
// });


import index from '../src/index.js'
import request from 'supertest'
// import mongoose from 'mongoose'
// import { mongoMemoryServer } from 'mongodb-memory-server'


describe('Test all routes',() =>{
  // let mongoServer;
  let server;
  beforeAll(async () =>{
    // mongoServer = new mongoMemoryServer();
    // const mongoUri = await mongoServer.getUri();
    // await mongoose.connect(mongoUri,{ useNewUrlParser: true})
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










