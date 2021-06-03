import axios from "axios";
export const fetchDetails = async (url)=>{
    
        
    let datast = [];

   await axios.get(url)
        .then(function (response) {
            
            datast = response.data["top"];
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



