export interface GiphyImage {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      }
    }
}


export interface Gif extends Pick<GiphyImage, 'id' | 'title'> {
    url: string;
}