import logger from 'morgan';
import express from "express";
import postapp  from './app/helper.js';
import cors from 'cors';

const app = express();

// Configure the app port
const port = process.env.PORT || 5000;
app.set('port', port);
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(logger('dev'));
app.use("/",postapp);

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));