import { Box,} from '@chakra-ui/layout'
import React from 'react'
import "./css/search.css"
import {useState,useEffect} from "react";
import { typography } from '@chakra-ui/styled-system';
import { useHistory } from 'react-router';
import { Spinner } from '@chakra-ui/spinner';

export default function Search({search = ""}) {
    const [searchData, setsearchData] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const history = useHistory();
    
    const fetchData = ()=>{
        setIsLoading(true);
        fetch(`https://api.jikan.moe/v3/search/anime?q=${history.location.search.slice(1)}=1`,{
            method:'GET',
        }).then(response=>response.json()).then(data =>{
            setsearchData(data.results);
            setIsLoading(false);
        });
    }

    useEffect(() => {            
        fetchData();
    }, [history.location.search.slice(1)])

    useEffect(()=>{
        fetchData();
    },[])
    return (
        <Box className="search-body">
            <div className="search-div" >

                    { !IsLoading ? searchData.length !== 0 ?                    
                    searchData.slice(0,15).map(data=>{
                        return <a href={data.url}>
                        <div className="search-cards">
                            <div className="image-div">
                                <img src={data.image_url} alt="" />
                                <div style={{ height: "8vh" }} >{data.title}</div>
                            </div>
                        </div>
                    </a> 
                    }): <typography>
                        Search for anime
                    </typography> : <Spinner height="20" width="20" color="red"  />
                    }
                 

            </div>
        </Box>


    )
}
