// import * as bodyParser from 'body-parser';
import express from 'express'
import session from 'express-session'
import Controller from './interfaces/controller.interface'
import errorMiddleware from './middleware/error.middleware'
const cookieParser = require('cookie-parser')  
const cors = require('cors')
const sequelize = require('./config/db')

class App {
  public app: express.Application;
 
  constructor(controllers: Controller[]) {
    this.app = express();
 
    // call class methods
    this.connectDB();
    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }
 
  // start server
  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`⚡️ App listening on the port ${process.env.PORT}`);
    });
  }
 
  // init middleware
  private initializeMiddleware() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(cookieParser())
    this.app.use(express.static('public/post_images'))
    this.app.use(session({
        secret: 'JJASJJSD73423432',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
      }))
  }
 
  // init error handling
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  // initialize controllers
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    })
  }

    
  // connect to database
  private connectDB = async () => {

    await sequelize.authenticate()
    .then(() => {
      console.log(`MySQL database connection to ${process.env.DATABASE} successful`)
    })
    .catch((err) => {
      console.error(`MySQL database connection to ${process.env.DATABASE} UNSUCCESSFUL due to `, err);
    })

  }


}

    
    
    
 
export default App