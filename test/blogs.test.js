import request from 'supertest';
import app from '../index_test.js';
import Blog from '../src/models/blogs.model.js';

describe('BlogController', () => {
        describe('display blogs', () =>{
    //     it('Should display all blogs created by users', () =>{
    //         try {
    //             const response = request(app)
    //             .get('/blogss')
    //             .expect(200)
    //         } catch (error) {
    //             const response = request(app)
    //             .get('/blogss')
    //             .expect(401)
    //         }

    //     })
    //    });
    test('should delete a blog', async () => {
        const newBlog = await Blog.create({
            author: 'testuser',
            title: 'Test blog',
            description: 'Test blog description',
          });
        try {
              const response = await request(app).delete(`/blogs/${newBlog.id}`);
              expect(response.status).toBe(200);
              expect(response.body.message).toBe('blog deleted successful');
              const deletedBlog = await Blog.findById(newBlog.id);
              expect(deletedBlog).toBeFalsy(); 
        } catch (error) {
            const response = await request(app).delete(`/blogs/${newBlog.id}`);
            expect(response.status).toBe(401);
        }
    });
});
  });
