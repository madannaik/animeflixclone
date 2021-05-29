import "./css/latest.css";
import { React, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";
import {fetchDetails} from "../API/api";
import { graph } from "../API/graph";


export const TopAnime = () => {
    const [isdata, setisdata] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [topAnime,setTopAnime] = useState([]);


    useEffect(() => {

        graph().then(data=>{
            setisloading(false);
            setisdata(data);
        });

        fetchDetails().then(data=>{
            setTopAnime(data);
        })
        
     

        // fetch('http://127.0.0.1:5000',
        //     {
        //         method: 'POST',
    
        //         headers: { 'Content-Type': 'application/json' },
        //     }
        // )
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log(data);
        //         setisloading(false);
        //         setisdata(data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }, [])

    return <div className="column-item">
        <h2 className="title">Latest Episodes</h2>
        <div className="episode-scroller">
            {isloading ? <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            /> : isdata.map(data => {
                return <div className="card">
                    <a href={data.link}>
                        <div className="card-image">
                            <figure className="image">
                                <img sizes="(max-width: 1087px) 416px, (max-width: 500px) 316px, 255px" src={data.imageUrl} alt="Fruits Basket 3rd Season picture" />
                            </figure>
                        </div>
                        <div className="card-content" >
                            <div className="episode-meta">
                                <span className="episode-title">
                                    {data.title}
                        </span>
                                <span className="episode-num">{data.type}</span>
                                <span className="episode-meta">
                                    <span className="">
                                        {String(data.language).substr(0,3)}</span></span>
                            </div>
                        </div>
                    </a>
                </div>
            })}

        </div>
        <div className="latest-anime-div">
            <h1>Top 24 Hrs</h1>
            <div className="latest-anime-cards">
                {topAnime.map(data=>{
                    return <div className="latest-cards">
                        <figure>
                            <img src={data.image_url} alt=""/>
                            <figcaption style={{height:"8vh"}} >{data.title}</figcaption>
                        </figure>
                    </div>
                })}


            </div>
        </div>
    </div>
}