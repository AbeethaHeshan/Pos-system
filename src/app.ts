import express from 'express';
//import type { Express } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import { dbConfig } from './configs/db.config';
import Logging from './library/Logging';
import mongoose from 'mongoose';
import { StartServer } from './server';

const app = express()

app.use(bodyParser.json())
app.use(cors())





mongoose
   .connect(dbConfig.mongo.url,{retryWrites:true})
   .then(()=>{
       Logging.info('mongo db server connected success !');
       StartServer();
   })
   .catch((e:any)=>{
       Logging.error('mongo db server error'+ e);
 });


