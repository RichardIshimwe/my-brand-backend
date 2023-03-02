import index from '../index_test.js'
import request from 'supertest'

describe('messageController Test', () => {
    describe('Send message', () => {

        it('should send message', async () => {
            const newMessage = {
                names: 'tester jest',
                email: 'tester@gmail.com',
                message: 'message to send from is ready'
            }
            const response = await request(index)
                .post('/message')
                .send(newMessage)
                .expect(200);
        })
    });
});

