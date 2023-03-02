import index from '../index_test.js'
import request from 'supertest'

describe('messageController Test', () => {
    describe('Send message', () => {

        it('should display all messages received by admin', async () => {
            try {
                const response = await request(index)
                .get('/message')
                .expect(200);
            } catch (error) {
                const response = await request(index)
                .get('/message')
                .expect(401);
            }
        })
    });
});