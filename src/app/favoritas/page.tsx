
import MovieCard from "../components/MovieCard";

export default function Page() {
  
  return (
    <div>
      <h1>Tus pelis favoritas</h1>
      <MovieCard favoritas={true}/>
    </div>
  );
};