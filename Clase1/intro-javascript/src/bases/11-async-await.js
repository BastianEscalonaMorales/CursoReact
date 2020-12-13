

//onst getImagenPromesa = 
  //  () =>  new Promise( resolve => resolve('https://asdasda.com'))
    



//getImagenPromesa().then(console.log)


const getImagen = async() => {

    try {
        const apiKey = 'gNHWPEOUUizvbuJD0jqtxDGzKnA6KumO';

        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await resp.json();
        const {url} = await data.images.original
    
    
        const img = document.createElement('img');
        img.src = url
        document.body.append(img)
        
    } catch (error) {
        //manejo de error 
        console.error(error);
    }


}

getImagen().then()


