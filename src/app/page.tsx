'use client'

import { useState } from "react";
import MovieCard from "./components/MovieCard";

export default function Home() {
  // Propiedades de una nueva pelicula
  const [name, setName] = useState("");
  const [year, setAge] = useState(2026);

  // Array de peliculas
  const [peliculas, setPeliculas] = useState<[string, number][]>([
    ["Oppenheimer", 2023],
    ["Dune: Parte Dos", 2024],
    ["Todo a la vez en todas partes", 2022],
    ["Barbie", 2023],
    ["Parásitos", 2019],
    ["Spider-Man: Un nuevo universo", 2018],
    ["Top Gun: Maverick", 2022],
    ["Dune", 2021],
    ["The Batman", 2022],
    ["Hamnet", 2025]
  ]);

  // Array de peliculas favoritas
  const [peliculasFav, setPeliculasFav] = useState<[string, number][]>([
    ["Oppenheimer", 2023],
    ["Dune: Parte Dos", 2024],
    ["Barbie", 2023],
    ["Parásitos", 2019],
  ])

  // Cambiar el estado de una pelicula a favorito
  const onAddFav = (movieName: string) => {
    // Revisa si esta repetida la pelicula
    let repetido = false;
    for (let i = 0; i < peliculasFav.length; i++) {
      if (peliculasFav[i][0] == movieName) {
        repetido = true;
      }
    }

    // Añade la pelicula a favoritos si no esta repetida
    for (let i = 0; i < peliculas.length; i++) {
      if (peliculas[i][0] == movieName && repetido != true) {
        setPeliculasFav([...peliculasFav, peliculas[i]]);
        break;
      }
    }
  };

  // Quitar el estado de una pelicula a sin favorito
  const onRemoveFav = (movieName: string) => {
    const peliculasTemp : [string, number][] = [];
    for (let i = 0; i < peliculasFav.length; i++) {
      if (peliculasFav[i][0] != movieName) {
        peliculasTemp.push(peliculasFav[i]);
      }
    }
    setPeliculasFav(peliculasTemp);
  };

  // Añadir una pelicula nueva al array
  const onSaveMovie = () => {
    // Si se llenaron los parametros y año es mayor a 0
    if (name && year && year > 0) {
      const movie: [string, number] = [name, year];
      setPeliculas([movie, ...peliculas]);
    } 
  }

  return (
    <main>
      {/* Inicio de la pagina */}
      <h1>Catálogo de Películas</h1>
      <p>
        En este pagina web, podras navegar en nuestros distintos apartados.<br/>
        Desde poder ver todo el catalogo que incluimos.<br/>
        Tus peliculas favoritas del momento.<br/>
        O si es necesario, poder añadir peliculas nuevas a nuestro catalogo.<br/>
      </p>

      {/* Añadir peliculas */}
      <h1>Añadir películas</h1>
      <div>
        <div>
          <label>Nombre:</label><br/>
          <input 
            value={name} 
            placeholder="ej. Titanic" 
            onChange={(e) => setName(e.target.value)}/><br/>

          <label>Año de estreno:</label><br/>
          <input 
            value={year}
            type="number"
            placeholder="ej. 2012"
            onChange={(e) => setAge(Number(e.target.value))}/><br/>

          <button onClick={onSaveMovie}>Añadir película</button>
        </div>
      </div>

      {/* Mirar todo el catalogo */}
      <h1>Nuestro catalogo</h1>
      <MovieCard
        favoritas={false}
        peliculas={peliculas}
        onMovieFav={onAddFav}
      />

      {/* Ver solo peliculas favoritas */}
      <h1>Tus pelis favoritas</h1>
      <MovieCard
        favoritas={true}
        peliculas={peliculasFav}
        onMovieFav={onRemoveFav}
      />
    </main>
  );
}