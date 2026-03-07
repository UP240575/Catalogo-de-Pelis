
interface movieCardProps {
  peliculas: [string, number][]
}

export default function MovieCard({peliculas} : movieCardProps) {
  return (
    <div>
      {peliculas.map((pelicula) => (
        <div>
          <p>{pelicula[0]}</p>
          <p>{pelicula[1]}</p>
        </div>
      ))}
    </div>
  );
};