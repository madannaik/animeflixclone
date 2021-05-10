import logger from 'morgan';
import express from "express";
import postapp  from './app/helper.js';


const app = express();

// Configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

// Load middlewares
app.use(logger('dev'));
app.use("/",postapp);

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));