import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'




type Props = {
    categories:string
}

export const GifGrid = ( {categories}:Props) =>{

    const {img, isLoading} = useFetchGifs(categories)


    return (
        <div>
            <h3>{categories}</h3>
            {
                isLoading && ( <h1>Cargando...</h1>)
            }
            <div className='card-grid'>
                { img.map(image => ( 
                    <GifItem 
                        key={ image.id }
                        { ...image }
                        />
                  ))
                }
            </div>
        </div>
    )
}