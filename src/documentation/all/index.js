import login from './user/login.js'
import signup from './user/signup.js'
import allUsers from './user/displayUsers.js';
import makeAdmin from './user/makeAdmin.js';


import allBlogs from './blogs/getAllBlogs.js'
import createBlog from './blogs/createBlog.js'
import deleteBlog from './blogs/deleteBlog.js'


export const paths = {
    '/login': {
      ...login
    },
    '/signup': {
      ...signup,
      ...allUsers
    },
    '/makeAdmin': {
      ...makeAdmin
    },
    '/blogs': {
      ...allBlogs,
      ...createBlog
    },
    '/blogs/:id': {
      ...deleteBlog
    }
  };
  
  export default { paths };