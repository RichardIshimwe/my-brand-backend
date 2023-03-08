const message={
    post: {
      tags: ["Message"],
      summary: "Signup a user",
      operationId: "Signup",
      parameters: [],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                names: {
                    type: "string",
                    description: "The password of the user",
                    example: "username"
                  },
                email: {
                  type: "string",
                  description: "The email of the user",
                  example: "heistesting@gmail.com"
                },
                message: {
                  type: "string",
                  description: "The password of the user",
                  example: "password"
                }
              },
              required: ["names", "email", "message"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "signup complete",
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
          description: "Internal Server error"
        }
      }
    }
  }

  export default message