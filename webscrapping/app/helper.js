import axios from 'axios';
import express from 'express';
import { gethtmldata } from './scotch.js';
const postapp = express.Router();
postapp.use(express.urlencoded({ extended: true }));
postapp.get("/", (req, res) => res.send({ status: 'ok' }));
postapp.post("/", async (req, res) => {
    const url = 'https://www1.gogoanime.ai/';
    axios.get(url).
    then(response=>{
        console.log(response.data);
        let url = gethtmldata(response.data);
        console.log(url);
        res.send(response.data);
    }).catch(err=>{
        console.log(err);
    })
}
)
export default postapp;