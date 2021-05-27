import *  as dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
import ProductsController from './controllers/products.controller'
const path = require("path")
import * as express from 'express';
import App from './app'

// get env variables
dotenv.config({
  path:'./config/.env'
})

// validate env variables
validateEnv();

// instantiate app class
const app = new App(
  [
    new ProductsController()
  ],
);



app.listen();
