import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import allRoutes from './routes/all.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import response from './utils/response.util.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import blogsRoute from './routes/blog.routes.js'
import options from './swagger.js'

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info:{
//             title:"My Brand Backend",
//             version: "1.0.0",
//             description: "This is the description"
//         },
//         server:[
// {
//     url:`http://localhost:4000`
// }
//         ]
//     },
//     apis:["*.js"] 
// }
const specs = swaggerJsDoc(options);
const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/documentation",swaggerUi.serve, swaggerUi.setup(specs));
app.get('/',(req, res) => response.success(res, 200,"welcome to the back-end of my project"));
// app.use(allRoutes);


app.post('/employee');
app.post('/team');
app.post('employeeassignment');

const port = process.env.PORT;
// mongoose.set('strictQuery', true);
//  mongoose.connect(`${process.env.MONGODBURL}`, { useNewUrlParser: true, useUnifiedTopology: true });
 app.listen(port);
 console.log(`the server is listening at http://localhost:${port}/documentation`);