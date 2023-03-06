import request from 'supertest';
import app from '../index_test.js';
import Blog from '../src/models/blogs.model.js'

describe('find a blog', () =>{
  test('should return 404 when the blog does not exist', async () =>{
      const find = await request(app).get('/blogs/noIdProvided');
      expect(find.status).toBe(404);
      expect(find.body.message).toBe(`The blog with id:noIdProvided is not found`)
  })
})

describe('Single blog', () => {

  test('should return the blog if it exists', async () => {
    const singleBlog = await Blog.create({
      author: 'admin',
      title: 'added by the admin',
      description: 'description by the admin'
    })
        const response = await request(app).get(`/blogs/${singleBlog._id}`);

          expect(response.body.message).toBe("The blog was found")
          expect(response.status).toBe(200);
          expect(response.body.data.author).toBe('admin');
          expect(response.body.data.title).toBe('added by the admin');
          expect(response.body.data.description).toBe('description by the admin')
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
      expect(response.body.data[allLength + 1].author).toBe('test if it is working');
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