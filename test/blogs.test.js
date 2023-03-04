import request from 'supertest';
import app from '../index_test.js';
import Blog from '../src/models/blogs.model.js'

describe('BlogController', () => {

    test('should return the blog if it exists', async () => {
        const response = await request(app).get(`/blogs/640119786d0f657b579ec0e3`);
        try {
          expect(response.status).toBe(200);
          expect(response.body.data.description).toBe('display single blog');
        } catch (error) {
          expect(response.status).toBe(404);
        }
    });
  });

  describe('All blogs', () => {
    test('should desplay all blogs in the database', async () => {
        const itemsLength = await Blog.find();
        const allLength = itemsLength.length;
      const blog1 = await Blog.create({
        author: 'insert',
        title: 'insert to test',
        description: 'insert totest',
      });
      const blog2 = await Blog.create({
        author: 'test if it is working',
        title: 'test title',
        description: 'test this description',
      });
      const response = await request(app).get('/blogs');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe(`All blogs available are:${allLength + 2}`);
      expect(response.body.data.length).toBe(allLength + 2);
    });
  });

describe('Creating Blog', () => {
    test('should create a new blog', async () => {
      const response = await request(app)
        .post('/blogs')
        .field('author', 'admin')
        .field('title', 'this is testing title')
        .field('description', 'New test blog description')
        .field('image', 'reserved for image')
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('blog created successfuly');
    });
  });

  describe('Deleting blog', () => {
    test('should delete a blog', async () => {
      const newBlog = await Blog.create({
        author: 'testuser',
        title: 'Test blog',
        description: 'Test blog description',
      });
      const response = await request(app).delete(`/blogs/${newBlog.id}`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('blog deleted successful');
      const deletedBlog = await Blog.findById(newBlog.id);
      expect(deletedBlog).toBeFalsy();
    });
  });