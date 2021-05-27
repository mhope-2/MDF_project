// import *  as dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
import ProductsController from './controllers/products.controller'
import App from './app'

// get env variables
// dotenv.config({
//   path:'./config/.env'
// })
require('dotenv').config({path:`./config/.env`})


// validate env variables
validateEnv();

// instantiate app class
const app = new App(
  [
    new ProductsController()
  ],
);



app.listen();
