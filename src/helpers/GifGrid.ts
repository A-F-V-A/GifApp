
import { Gif, GiphyImage } from '../model/Props.model'

export const getGifs = async (categories:string):Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Qz1q1DJiQ3T4K80bUcWmjFweaLFuC4EH&q=${ categories }&limit=10`
    const resp = await fetch(url)

    const { data } = await resp.json()

    const gifs:Gif[] = data.map((img:GiphyImage) =>({
        id    : img.id,
        title : img.title,
        url   : img.images.downsized_medium.url
    }))

    return gifs
}