import axios from "axios";
export const fetchDetails = async ()=>{
    const date = new Date();
    const day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    let url = `https://api.jikan.moe/v3/schedule/${day[date.getDay()]}`;
    
    let datast = [];
// Make a request for a user with a given ID
   await axios.get(url)
        .then(function (response) {
            // handle success
            
            datast = response.data[day[date.getDay()]];
            console.log(datast);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        return datast;
}