const component = {
    components: {
      schemas: {
        // id model
        User: {
        
            type: "object", // data type
            properties: {
                _id: {
                    type: "string", // data-type
                    description: "User identification number", // desc
                    example: "ytyVgh", // example of an id
                },
                email: {
                    type: "string", // data-type
                    description: "User's email", // desc
                    example: "johndoe@example.com", // example of an email
                },
                username: {
                    type: "string", // data-type
                    description: "User's username", // desc
                    example: "JohnDoes", // example of a username
                },
                gender: {
                    type: "string", // data-type
                    description: "User's gender", // desc
                    example: "male", // example of a gender
                },
                password: {
                    type: "string", // data-type
                    description: "User's password", // desc
                    example: "password123", // example of a password
                },
                confirmPassword: {
                    type: "string", // data-type
                    description: "User's confirm password", // desc
                    example: "password123", // example of a confirm password
                },
            }
        },
        // todo model
        Todo: {
          type: "object", // data type
          properties: {
            id: {
              type: "string", // data-type
              description: "Todo identification number", // desc
              example: "ytyVgh", // example of an id
            },
            title: {
              type: "string", // data-type
              description: "Todo's title", // desc
              example: "Coding in JavaScript", // example of a title
            },
            completed: {
              type: "boolean", // data type
              description: "The status of the todo", // desc
              example: false, // example of a completed value
            },
          },
        },
        // Todo input model
        TodoInput: {
          type: "object", // data type
          properties: {
            title: {
              type: "string", // data type
              description: "Todo's title", // desc
              example: "Coding in JavaScript", // example of a title
            },
            completed: {
              type: "boolean", // data type
              description: "The status of the todo", // desc
              example: false, // example of a completed value
            },
          },
        },
        // error model
        Error: {
          type: "object", //data type
          properties: {
            message: {
              type: "string", // data type
              description: "Error message", // desc
              example: "Not found", // example of an error message
            },
            internal_code: {
              type: "string", // data type
              description: "Error internal code", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
      },
    },
  };

  export default component