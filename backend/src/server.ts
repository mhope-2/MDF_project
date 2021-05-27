// import *  as dotenv from 'dotenv'
import validateEnv from './utils/validateEnv'
import ProductsController from './controllers/products.controller'
import App from './app'

console.log(__dirname)
require('dotenv').config({path:__dirname + `/config/.env`})


// validate env variables
validateEnv();

// instantiate app class
const app = new App(
  [
    new ProductsController()
  ],
);



app.listen();
