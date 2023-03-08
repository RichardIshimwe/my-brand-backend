const login={
    post: {
      tags: ["User"],
      summary: "Login a user",
      operationId: "login",
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
                  example: "ishimwerichard26@gmail.com"
                },
                password: {
                  type: "string",
                  description: "The password of the user",
                  example: "password"
                }
              },
              required: ["email", "password"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "User logged in successfully",
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

  export default login