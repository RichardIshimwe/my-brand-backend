const editBlog={
    put: {
      tags: ["Blogs"],
      summary: "Edit a blog",
      operationId: "editBlog",
      parameters: [
        {
            in: "path",
            name: "id",
            description: "ID of the blog to delete",
            required: true,
            type: "string"
        }
    ],

    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "The email of the user",
                example: "this is a title by admin"
              },
              description: {
                type: "string",
                description: "The email of the user",
                example: "this is a description by admin"
              },
            },
            required: ["title", "description"]
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
              title: {
                type: "string",
                description: "Title of the created blog post"
              },
              description: {
                type: "string",
                description: "Content of the created blog post"
              },
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

export default editBlog