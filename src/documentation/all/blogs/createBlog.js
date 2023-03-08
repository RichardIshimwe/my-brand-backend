const createBlog={
    post: {
      tags: ["Blogs"],
      summary: "Create a new blog post",
      operationId: "createBlog",
      parameters: [
    ],

      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  description: "This is the title",
                  example: "title"
                },
                description: {
                  type: "string",
                  description: "Description of the blog",
                  example: "title..."
                },
                image: {
                  type: "file",
                  description: "image"
                }
              },
              required: ["title", "description", "image"]
            }
          }
        }
      },
      responses: {
        201: {
          description: "Blog post created successfully",
          schema: {
            type: "object",
            properties: {
              _id: {
                type: "string",
                description: "ID of the created blog post"
              },
              blogTitle: {
                type: "string",
                description: "Title of the created blog post"
              },
              blogContent: {
                type: "string",
                description: "Content of the created blog post"
              },
              blogImage: {
                type: "string",
                description: "Image URL of the created blog post"
              }
            }
          }
        },
        400: {
          description: "Invalid input provided"
        },
        500: {
          description: "Server error"
        }
      }
    }

}

export default createBlog