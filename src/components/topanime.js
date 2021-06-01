import "./css/latest.css";
import { React, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";
import { fetchDetails } from "../API/api";
import { graph } from "../API/graph";
import { useMediaQuery } from "@chakra-ui/react";

export const TopAnime = () => {
    const [isdata, setisdata] = useState([]);
    const [isloading, setisloading] = useState(true);
    const [topAnime, setTopAnime] = useState([]);
    const [topUpcoming, setUpcoming] = useState([]);

    const [isMobile, isTablet, isLap, isLargeLap, isXLargeLap] = useMediaQuery([
        "(min-width: 400px)",
        "(min-width: 700px)",
        "(min-width: 1080px)",
        "(min-width: 1240px)",
        "(min-width: 1444px)",
    ]);
    console.log(isMobile, isTablet, isLap, isLargeLap, isXLargeLap)



    useEffect(() => {

        graph().then(data => {
            setisloading(false);
            setisdata(data);
        });

        fetchDetails("https://api.jikan.moe/v3/top/anime/1/airing").then(data => {
            setTopAnime(data);
        });
        fetchDetails("https://api.jikan.moe/v3/top/anime/1/upcoming").then(data => {
            setUpcoming(data);
        })




    }, [])

    return <div className="column-item">
        <h2 className="title">Latest Episodes</h2>
        <div className="episode-scroller" style={{ padding: "1.5rem" }}>
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
                                <img sizes="(max-width: 1087px) 416px, (max-width: 500px) 316px, 255px" src={data.imageUrl} alt={data.title} />
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
                                        {String(data.language).substr(0, 3)}</span></span>
                            </div>
                        </div>
                    </a>
                </div>
            })}

        </div>
        <div className="latest-anime-div" style={{ marginTop: "2rem" }}>
            <h1>Top airing</h1>
            <div className="latest-anime-cards">
                {topAnime.slice(0, 20).map(data => {

                    return <a href={data.url} target="_blank" >
                        <div className="latest-cards">
                            <figure>
                                <img src={data.image_url} alt={data.title} />
                                <figcaption style={{ height: "8vh" }} >{data.title.slice(0, 45)}</figcaption>
                            </figure>
                        </div>
                    </a>
                })}


            </div>
        </div>
        <div className="latest-anime-div" style={{ marginTop: "3rem" }} >
            <h1>Top upcoming</h1>
            <div className="latest-anime-cards"  >
                {topUpcoming.slice(0, 20).map(data => {
                    return <a href={data.url} target="_blank">
                        <div className="latest-cards">
                            <figure style={{ width: `${{ base: "100%", sm: "50%", md: "25%" }}` }} >
                                <img src={data.image_url} alt="" />
                                <figcaption style={{ height: "8vh" }} >{data.title.slice(0, 41)}</figcaption>
                            </figure>
                        </div>
                    </a>
                })}


            </div>
        </div>
    </div>
}