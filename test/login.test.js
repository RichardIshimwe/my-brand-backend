import request from 'supertest';
import app from '../index_test.js';

describe('UserController Test', () => {

  describe('signupUser', () => {
    it('should log in a user if he/she has an account', async () =>{
      const userToLogin = {
        email: 'ouhjtest@tst.com',
        password: '123456'
      }
      const username = 'oyuhtest';
      try {
        const responses = await request(app)
          .get('/login')
          .send(userToLogin)
          .expect(200);
        expect(responses.body.message).toEqual(`${username} you are welcome........`);
      } catch (error) {
        const errors = await request(app)
          .get('/login')
          .send(userToLogin)
          .expect(400);
        expect(errors.body.message).toEqual('you have to do a signup');
      }
    })
  });
});