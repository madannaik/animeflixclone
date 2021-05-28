import logger from 'morgan';
import express from "express";
import postapp  from './app/helper.js';
import cors from 'cors';

const app = express();

// Configure the app port
const port = process.env.PORT || 5000;
app.set('port', port);
app.use(cors({
    origin:false,
}))
// Load middlewares
app.use(logger('dev'));
app.use("/",postapp);

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));