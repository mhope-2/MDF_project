import express from 'express'
import Controller from '../interfaces/controller.interface'
import ProductsInterface from '../interfaces/products.interface'
import Products from '../models/products.model'
import HttpException from '../exceptions/http/HttpException'
import PostNotFoundException from '../exceptions/post/PostNotFoundException' 
import CreateProductDto from '../products/products.dto'


class ProductsController implements Controller {
    public path = '/products'
    public router = express.Router()
    private products = Products
   
    constructor() {
      this.initializeRoutes()
    }

    private initializeRoutes() {
      this.router.get(this.path, this.productList);
      this.router.post(`${this.path}/add`, this.addProduct);
    }


    // list all posts
    private productList = async (req:express.Request, res:express.Response) => {
      
      await this.products.findAll()
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err)) 

      }    

   
    // add post
    private addProduct = async (req:express.Request, res:express.Response) => {
      const addProduct : CreateProductDto = req.body
      const newProduct = await this.products.create(addProduct)
      .then(() => res.json({"Response":`Product added`}))
      .catch(err => res.status(400).json('Error: ' + err));    
      
  }

 
  // class end
  }

export default ProductsController