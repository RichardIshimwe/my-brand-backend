import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import allRoutes from './routes/all.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import response from './utils/response.util.js';
import swaggerUi from 'swagger-ui-express';
import docs from './documentation/index.js'

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

dotenv.config();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.get('/',(req, res) => response.success(res, 200,"welcome to the back-end of my project use /api-docs to get the swagger documentation "));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(docs));
app.use(allRoutes);
const port = process.env.PORT;
mongoose.set('strictQuery', true);
 mongoose.connect(`${process.env.MONGODBURL}`, { useNewUrlParser: true, useUnifiedTopology: true });
 app.listen(port);
 console.log(`the server is listening at http://localhost:${port}`);
