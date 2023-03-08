const allUsers={
    get: {
      tags: ["User"],
      summary: "Get all User",
      operationId: "Users",
      parameters: [],
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

  export default allUsers