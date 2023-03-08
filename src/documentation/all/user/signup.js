const signup={
    post: {
      tags: ["User"],
      summary: "Signup a user",
      operationId: "Signup",
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
                },
                username: {
                    type: "string",
                    description: "The password of the user",
                    example: "username"
                  },
                password: {
                  type: "string",
                  description: "The password of the user",
                  example: "password"
                },
                confirmPassword: {
                    type: "string",
                    description: "The password of the user",
                    example: "password"
                  }
              },
              required: ["email", "username", "password", "confirmPassword"]
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

  export default signup