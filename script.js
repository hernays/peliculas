const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1c5b642ef8eb3fed07af1517ff4acc94&language=en-US&page=1';
const urlImage = 'https://image.tmdb.org/t/p/original/';

const container = document.querySelector('#container');
const boton = document.querySelector('#boton');

const peliculas = async() => {

    const response = await fetch(url ,);
    const data = await response.json();

    return data.results;

}


let contador = 0;
const crearHTML = async() => {

    const pelicula = await peliculas();

    pelicula.forEach(element => {

        contador++;

       const id = element.id;
            const html = `
            <div class="caja">
            <a href="#${element.id}">
            <img  id="${String(id).trim()}" class="${(element.adult) ? 'adulto' : ''}" src="${urlImage}${element.poster_path}">
            </a>

             </div>
            `;
    
            const caja = document.createElement('div');
    
            caja.innerHTML = html;
    
            container.prepend(caja)

    });

}

crearHTML();







