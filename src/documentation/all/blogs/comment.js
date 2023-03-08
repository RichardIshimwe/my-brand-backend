const comment={
  
    post: {
        tags: ["Blogs"],
        summary: "Comment on a blog by ID",
        operationId: "comment",
        parameters: [
            {
                in: "path",
                name: "id",
                description: "ID of the blog to comment on.",
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
                    comment: {
                      type: "string",
                      description: "The email of the user",
                      example: "this is a comment by admin"
                    },
                  },
                  required: ["comment"]
                }
              }
            }
          },
        responses: {
            200: {
                description: "Blog post deleted successfully"
            },
            400: {
                description: "Invalid input provided"
            },
            401: {
                description: "User is not authenticated"
            },
            404: {
                description: "Blog post not found"
            },
            500: {
                description: "internal Server error"
            }
        }
    }
}

export default comment