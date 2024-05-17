function getmovie(movie) {
    const apiURL = `https://media.imdbot.workers.dev/tt5548032`;
    fetch (apiURL)
     .then(response => {
        if (!response.ok ){
            throw new error ('Pagina fuera de servicio');
        }
        return response.json();
     })

     .then(data => {

        const movieinfo = data;

        if (movieinfo) {

            document.getElementById('tetxo1').textContent = movieinfo.description
            
        
            
            
            
            
            
            
        }
     })


}
getmovie()