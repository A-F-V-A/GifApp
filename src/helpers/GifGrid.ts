import { Gif, GiphyImage } from '../model/Props.model'

export const getGifs = async (categories:string):Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${ categories }&limit=10`
    const resp = await fetch(url)

    const { data } = await resp.json()

    const gifs:Gif[] = data.map((img:GiphyImage) =>({
        id    : img.id,
        title : img.title,
        url   : img.images.downsized_medium.url
    }))

    return gifs
}