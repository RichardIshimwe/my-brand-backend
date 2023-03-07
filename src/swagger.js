const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "My Brand Swagger Documentation",
        version: "1.0.0",
        description:
          ""
      },
      servers: [
        {
          url: "http://localhost:4000",
          description: 'Documentation testing server'
        },
      ],
      components: {
        schemas: {
            Blogs: {
                type: 'object',
                required: ['title', 'description', 'image'],
                properties: {
                    title: {
                        type: 'string',
                        description: 'The title of the blog'
                    },
                    description: {
                        type: 'string',
                        description: 'The description of the blog'
                    },
                    image: {
                        type: 'file',
                        description: 'The image of the blog'
                    }
                },
                example: {
                    title: 'title',
                    description: 'This is a description of a blog',
                    image: 'file'
                }
            }
        },
        responses : {
            200: {
                schema: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            _id: { type: "string" },
                            blogTitle: { type: "string" },
                            blogContent: { type: "string" },
                            blogImage: { type: "string" }
                        }
                    }
                }
            },
            500: {
                description: 'Internal server error',
                contents: 'application/json'
            },
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization'
            }
          }
      },
      security: [{
        ApiKeyAuth: []
      }]

    },
    apis: ["./src/routes/blog.routes.js"],
}

export default options