// const axios = require('axios')
// const gethtmldata = require('./scotch');

import axios from "axios";
import { gethtmldata } from "./scotch";
const token = '4a2a4c1372879d38c40f98bf3d447273';
export const graph =  async () => {
    const url  = "https://ww1.animesimple.com/";
    const webdata = await axios.get(`http://api.scrapeup.com/?api_key=${token}&url=${url}`);
    const og = webdata.data
    const array = gethtmldata(og);
    return array;
}

