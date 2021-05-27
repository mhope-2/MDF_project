const jwt = require('jsonwebtoken')
import express from 'express'
import Controller from '../interfaces/controller.interface'
import PostInterface from '../interfaces/post.interface'
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
      this.router.get(this.path, this.postList);
      this.router.get(`${this.path}/:id`, this.findPostById);
      this.router.post(`${this.path}/add`, this.addProduct);
      this.router.patch(`${this.path}/update/:id`, this.updatePostById);
      this.router.delete(`${this.path}/delete`, this.deletePostById);
    }
   

    // list all posts
    private postList = async (req:express.Request, res:express.Response) => {
        await this.products.findAll()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err)) 
    } 

   
    // add post
    private addProduct = async (req:express.Request, res:express.Response) => {
      const addPostData : CreateProductDto = req.body
      const newPost = new this.products(addPostData)
      
      const saveNewPost = await newPost.save()
      .then(() => res.json({"Response":`Product added`}))
      .catch(err => res.status(400).json('Error: ' + err));
  }


  // Get post Info by Id
  private findPostById = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    this.products.findOne({ where: { id: req.params.id } })
    .then(product => {
      if (product)
        res.json(product)
      else {
        next(new HttpException(404, 'Post not found'));
      }
    })
  }


  // Update Exercide
   private updatePostById = async (req:express.Request, res:express.Response, next:express.NextFunction) => {

    const id = req.params.id
    const location_name = req.params.location_name
    const catalog_name = req.params.catalog_name
    const color = req.params.color
    const size = req.params.size
    const quantity = req.params.quantity
    const del_flg = req.params.del_flg

    // const updatePostData: PostInterface = req.body

    this.products.update({id: id}, {
      where: {
        id: id
      }
    })
    .then(product => {
      if (product)
        res.json({"Response":`Product updated`})
      else{
        next(new PostNotFoundException(id))
      }
    }    

    )}


    // Delete by id
    private deletePostById = async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        const id = req.body.id
        this.products.destroy(id)
        .then(successResponse => {
          if (successResponse) {
              res.json({"Response":`Product deleted successfully`});
          } else {
            next(new PostNotFoundException(id));
          }
        })
    }
  // class end
  }

export default ProductsController