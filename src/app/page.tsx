
'use client'

import { useState } from "react";
import MovieCard from "./components/MovieCard";

export default function Home() {

  // Array de peliculas (Marcar explicitamente que es un array con arrays con un string y un number)
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

  return (
    <main>
      <h1>Nuestro catalogo</h1>
      <MovieCard peliculas={peliculas}/>
    </main>
  );
}
