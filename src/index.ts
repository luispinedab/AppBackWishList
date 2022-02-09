import express from 'express'
import 'reflect-metadata';
import morgan from 'morgan';
import cors from 'cors';
import { createConnection,  } from 'typeorm';

import productRoutes from './routes/product.routes';
import wishlistRoutes from './routes/wishlist.routes';
const app = express()
createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(productRoutes,wishlistRoutes)
app.listen(3000);

console.log('Server on port',3000);