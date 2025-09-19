import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'geUNEjyvp14msEhEDVdw6EhcvFLQOQ9j'
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.appendChild(imgElement);
}

myRequest
.then((response) =>response.json())
.then(({ data }: GiphyRandomResponse)=>{
    const imageUrl = data.images.original.url
    console.log(imageUrl)
    createImageInsideDOM(imageUrl)
    
})
.catch((err)=>{
    console.log(err)
})

