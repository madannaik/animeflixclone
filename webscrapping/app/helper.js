import axios from 'axios';
import express from 'express';
import { gethtmldata } from './scotch.js';
const postapp = express.Router();
postapp.use(express.urlencoded({ extended: true }));
postapp.get("/", (req, res) => res.send({ status: 'ok' }));
postapp.post("/", async (req, res) => {
    const url = 'https://ww1.animesimple.com/';
    axios.get(url).then(response=>{
        let url = gethtmldata(response.data);
        console.log("data sent");
        res.send(url);
        console.log({
            ip:req.url,
            url:req.hostname,
            data:url.length,
        });
    }).catch(err=>{
        console.log(err);
    })
}
)
export default postapp;