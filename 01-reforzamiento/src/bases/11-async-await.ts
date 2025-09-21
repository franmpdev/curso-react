import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'geUNEjyvp14msEhEDVdw6EhcvFLQOQ9j'



const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}



const getRandomGifUrl = async() =>{
    //return await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
}

getRandomGifUrl().then(url => createImageInsideDOM(url))