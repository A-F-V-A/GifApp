import { useEffect, useState } from 'react'
import { Gif } from '../model/Props.model'
import { getGifs } from '../helpers/GifGrid' 


export const useFetchGifs = ( categories:string ) =>{

    const [ img, setImg ] = useState<Gif[]>([]) 
    const [ isLoading, setIsLoading] = useState<boolean>(true)

    useEffect( () =>{
        getGifs(categories)
            .then((cat) => {
                setImg(cat)
                setIsLoading(false)
            })
    }, [ ])

    return {
        img,
        isLoading
    }
}