
'use client'

interface movieCardProps {
  favoritas: boolean,
  peliculas: [string, number][],
  onMovieFav: (movieName: string) => void,
};

export default function MovieCard({ favoritas, peliculas, onMovieFav }: movieCardProps) {

  const msgBotton = (favoritas ? "Eliminar de favoritos" : "Agregar a favoritos")

  return (
    <div className="mainCard">
      {peliculas.map((pelicula) => (
        <div className="card" key={pelicula[0]}>
          <p className="titleCard">{pelicula[0]}</p>
          <p>{pelicula[1]}</p>
          <button onClick={() => onMovieFav(pelicula[0])} className="buttonCard">{msgBotton}</button>
        </div>
      ))}
    </div>
  );
};