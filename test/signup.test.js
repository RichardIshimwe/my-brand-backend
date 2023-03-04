import request from 'supertest';
import app from '../index_test.js';
import bcrypt from 'bcrypt';

describe('UserController Test', () => {

  describe('signupUser', () => {
    it('should signup a user if he/she does not have account', async () => {
      const salt = bcrypt.genSaltSync(10);
      const password = '123456';
      const passwordHashed = bcrypt.hashSync(password, salt);
      const newUser = {
        email: 'testwr@tst.com',
        username: 'testwr',
        password: password,
        confirmPassword: password,
      };
      try {
        const response = await request(app)
          .post('/signup')
          .send(newUser)
          .expect(200);
        expect(response.body.message).toEqual('signup complete');
      } catch (error) {
        const errors = await request(app)
          .post('/signup')
          .send(newUser)
          .expect(400);
        expect(errors.body.message).toEqual('username or email is already taken');
      }
    });
  },20000);
});