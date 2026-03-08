
'use client'

import { useState, useEffect } from "react";

interface movieCardProps {
  favoritas: boolean,
  newMovie? : [string, number, boolean],
};

export default function MovieCard({favoritas, newMovie} : movieCardProps) {

  // Array de peliculas (Marcar explicitamente que es un array con arrays con un string y un number)
  const [peliculas, setPeliculas] = useState<[string, number, boolean][]>([
    ["Oppenheimer", 2023, false],
    ["Dune: Parte Dos", 2024, true],
    ["Todo a la vez en todas partes", 2022, false],
    ["Barbie", 2023, true],
    ["Parásitos", 2019, false],
    ["Spider-Man: Un nuevo universo", 2018, true],
    ["Top Gun: Maverick", 2022, false],
    ["Dune", 2021, false],
    ["The Batman", 2022, true],
    ["Hamnet", 2025, false]
  ]);

  const onMovieFav = (index : number) => {
    setPeliculas(peliculas.map((pelicula, posicion) => 
      index === posicion ? [pelicula[0], pelicula[1], !pelicula[2]] : pelicula
    ));
  };

  useEffect(() => {
    if (newMovie) {
      setPeliculas(prevPeliculas => [newMovie, ...prevPeliculas]);
    }
  }, [newMovie]);

  return (
    <div>
      {peliculas.map((pelicula, index) => (
        <div key={index}>
          {favoritas ? 
            (pelicula[2] ? 
              <div>
                <p>{pelicula[0]}</p>
                <p>{pelicula[1]}</p>
                <button onClick={() => onMovieFav(index)}>{pelicula[2] ? 'Eliminar de favoritos' : 'Añadir a favoritos'}</button>
              </div> : "") : 
              <div>
                <p>{pelicula[0]}</p>
                <p>{pelicula[1]}</p>
                <button onClick={() => onMovieFav(index)}>{pelicula[2] ? 'Eliminar de favoritos' : 'Añadir a favoritos'}</button>
              </div>}
        </div>
      ))}
    </div>
  );
};