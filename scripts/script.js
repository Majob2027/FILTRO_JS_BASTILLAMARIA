function getmovie(movie) {
    const apiURL = `https://search.imdbot.workers.dev/?q=Niram`;
    fetch (apiURL)
     .then(response => {
        if (!response.ok ){
            throw new error ('Pagina fuera de servicio')
        }
        return response.json();
     })

     .then(data => {

        const movieinfo = data;

        if (movieinfo) {
            const movieinfo = document.getElementById('movie-info');
            console.log(movieinfo)
            movieinfo.innerHTML = `
            <p id =texto1> ok <div> ${movieinfo.ok}</div> 
            <p id=titulo2> Title <div> ${movieinfo.description}</div>
        
            
            
            
            
            `
            
        }
     })


}
getmovie()


