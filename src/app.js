import express from 'express';
import cors from 'cors'

//routes 
import routes from './routes/routes';


//database/index.js
import './database';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use('/', (req, res, next) =>{
            res.header("Access-Control-Allow-Origin", "*");
	        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Origin", "*");
            next();
        });
        this.server.use(cors());
    }

    routes() {
        this.server.use(routes);
        
    }
}

export default new App().server;