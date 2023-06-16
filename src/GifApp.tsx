import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifApp = () =>{
    const [ categories , setCategories ] = useState<string[]>(['Rick and Morty'])

    const onCategories = (cate:string) => {
        if(categories.includes(cate)) return
        setCategories([cate,...categories])
    }

    return(
        <>
            <h1>GifApp (AFVA)</h1>
            <AddCategory onCategories={onCategories}/>

            { categories.map(m =>  <GifGrid key={m} categories={m}/>)}
           
        </>
    )
}