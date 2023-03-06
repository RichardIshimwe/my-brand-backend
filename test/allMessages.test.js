import index from '../index_test.js'
import request from 'supertest'
import message from '../src/models/messages.model.js'

describe('messageController Test', () => {
    describe('Send message', () => {

        it('should display all messages received by admin', async () => {
                let messages = await message.find();
                const messageLength = messages.length;
                const response = await request(index)
                .get('/message')
                .expect(200);
        })
    });
});