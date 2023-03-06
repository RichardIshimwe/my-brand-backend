import index from '../index_test.js'
import request from 'supertest'
import Blog from '../src/models/blogs.model.js'

describe('Check if the comment is set on the blog', () =>{
    test('Should set a comment on a blog', async () =>{
    const objectToPush = {username:'admin',comment:'admin commenting'};
    const comment = await request(index).post(`/comment/6405d1b91f3302363c17c2ae`).send(objectToPush);
    expect(comment.status).toBe(200);
    expect(comment.body.message).toBe('thank you for commenting');
    })
})
