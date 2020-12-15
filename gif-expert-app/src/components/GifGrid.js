import React from 'react'

export const GifGrid = ({categoria}) => {


    const getGifs = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=gNHWPEOUUizvbuJD0jqtxDGzKnA6KumO`
        const resp = await fetch (url);
        const data = await resp.json();

        console.log(data)
    
    
    }
    return (
        <div>
            <h3>{categoria}</h3>
        </div>
    )
}
