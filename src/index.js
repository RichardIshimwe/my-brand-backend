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
import docs from './documentation/index.js'

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(docs));

app.get('/',(req, res) => response.success(res, 200,"welcome to the back-end swagger documentation of my project"));
app.use(allRoutes);
const port = process.env.PORT;
mongoose.set('strictQuery', true);
 mongoose.connect(`${process.env.MONGODBURL}`, { useNewUrlParser: true, useUnifiedTopology: true });
 app.listen(port);
 console.log(`the server is listening at http://localhost:${port}/api-docs`);