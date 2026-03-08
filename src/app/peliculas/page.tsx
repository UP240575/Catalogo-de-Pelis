
import MovieCard from "../components/MovieCard";

export default function Home() {

  return (
    <main>
      <h1>Nuestro catalogo</h1>
      <MovieCard favoritas={false}/>
    </main>
  );
}
