import "./latest.css";
import { React, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";
//"https://cdn.animeultima.tv/episode-photo/786e9b14-7ea2-4d70-aca3-1dc6dc5bd6b8_medium.jpg 416w, https://cdn.animeultima.tv/episode-photo/786e9b14-7ea2-4d70-aca3-1dc6dc5bd6b8_small.jpg 316w, https://cdn.animeultima.tv/episode-photo/786e9b14-7ea2-4d70-aca3-1dc6dc5bd6b8_xs.jpg 255w" sizes="(max-width: 1087px) 416px, (max-width: 500px) 316px, 255px"
export const TopAnime = () => {
    const [isdata, setisdata] = useState([]);
    const [isloading, setisloading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setisloading(false);
                setisdata(data);
            })
            .catch(err => {
                console.log(err);
            })
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
    </div>
}