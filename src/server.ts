import express from "express";
import Logging from "./library/Logging";
import http from 'http';
import config from './configs/env.config'
const router = express();


export const StartServer = () => {
    router.use((req,res,next)=>{
            
             Logging.info('Comming Method :'+ req.method + "\n URL : "+req.url +" IP :"+req.socket.remoteAddress);
         res.on('finish',() => {
             Logging.info('Comming Method :'+ req.method + "\n URL : "+req.url +" IP :"+req.socket.remoteAddress + " Status : "+ res.statusCode);
         })
         next();
    })
    router.use(express.urlencoded({extended:true}));
    router.use(express.json());
     

      /** Rules of our API */
      router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

        /** Routes */
    // router.use('/authors', authorRoutes);
    // router.use('/books', bookRoutes);

    /** Healthcheck */
    router.get('/ping', (req, res) => res.status(200).json({ status: 'UP'}));

    /** Error handling */
    router.use((req, res) => {
        const error = new Error('Not found');
        Logging.error(error);
        
        res.status(404).json({
            message: error.message
        });
    });

    http.createServer(router).listen(config.SERVER_PORT, () => Logging.info(`Server is running on port ${config.SERVER_PORT}`));

};
