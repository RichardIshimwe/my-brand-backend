const makeAdmin={
    post: {
      tags: ["User"],
      summary: "Make a user an admin",
      operationId: "admin",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  description: "The email of the user",
                  example: "heistesting@gmail.com"
                }
              },
              required: ["email"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "admin",
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Welcome message for the user"
              },
              token: {
                type: "string",
                description: "JWT token for the user"
              }
            }
          }
        },
        400: {
          description: "Please do a signup"
        },
        500: {
          description: "Server error"
        }
      }
    }
  }

  export default makeAdmin