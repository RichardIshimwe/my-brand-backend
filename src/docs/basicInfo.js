const option = {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Simple Todos API", // short title.
      description: "A simple todos API", //  desc.
      version: "1.0.0", // version number
      contact: {
        name: "John doe", // your name
        email: "john@web.com", // your email
        url: "web.com", // your website
      },
    },
  };

export default option
/**
 * @swagger
 * definitions:
 *  Employee:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the employee
 *     example: 'Jayaramachandran'
 *    date_of_joining:
 *     type: string
 *     description: date of joining of the employee
 *     example: '2020-08-30'
 *    email:
 *     type: string
 *     description: email of the employee
 *     example: 'jayaramachandran@whizpath.com'
 *    gender:
 *     type: string
 *     description: gender of the employee
 *     example: 'male'
 *    bio:
 *     type: string
 *     description: biography of the employee
 *     example: 'father, software developer'
 *    designation:
 *     type: string
 *     description: designation of the employee
 *     example: 'Software Engineer'
 *  Team:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the team
 *     example: 'javscript'
 *    email:
 *     type: string
 *     description: email of the team
 *     example: 'javascript@whizpath.com'
 *    description:
 *     type: string
 *     description: description of the team
 *     example: 'javascript developers'
 *  Employee_Assignment:
 *   type: object
 *   properties:
 *    employee_id:
 *     type: integer
 *     description: id of the employee
 *     example: 2
 *    team_id:
 *     type: integer
 *     description: id of the team
 *     example: 2
 */


 /**
  * @swagger
  * /employee:
  *  post:
  *   summary: create employee
  *   description: create employee for the organisation
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Employee'
  *   responses:
  *    200:
  *     description: employee created succesfully
  *    500:
  *     description: failure in creating employee
  */