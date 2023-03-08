const allmessage={
    get: {
      tags: ["Message"],
      summary: "Display all messages",
      operationId: "displaymessage",
      parameters: [],
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

  export default allmessage