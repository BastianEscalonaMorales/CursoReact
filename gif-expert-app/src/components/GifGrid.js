import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:images,loading} = useFetchGifs(categoria);




   // getGifs();
    return (
        <>
            <h3 className= "animate__animated animate__fadeIn">{categoria}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
        
                    <div className="card-grid"> 
                    {
                        images.map(img =>(
                            <GifGridItem 
                                key= {img.id}
                                {...img}
                                />
                        ))
                    }
                </div>
            

         </>
         
    )
}
