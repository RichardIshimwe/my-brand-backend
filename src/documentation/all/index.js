import login from './user/login.js'
import signup from './user/signup.js'
import allUsers from './user/displayUsers.js';
import makeAdmin from './user/makeAdmin.js';


import allBlogs from './blogs/getAllBlogs.js'
import createBlog from './blogs/createBlog.js'
import deleteBlog from './blogs/deleteBlog.js'
import editBlog from './blogs/editBlog.js';
import comment from './blogs/comment.js'
import singleBlog from './blogs/singleblog.js';


import message from './messages/sendmessage.js';
import allmessage from './messages/allmessages.js';


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
    '/blogs/{id}': {
      ...deleteBlog,
      ...editBlog,
      ...singleBlog
    },
    '/comment/{id}': {
      ...comment
    },
    '/message': {
      ...message,
      ...allmessage
    }
  };
  
  export default { paths };