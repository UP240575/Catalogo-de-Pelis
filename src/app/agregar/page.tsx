'use client'

import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nuevaPelicula, setNuevaPelicula] = useState<[string, number, boolean] | undefined>();

  const onSaveMovie = () => {
    if (name && age) {
      const movie: [string, number, boolean] = [name, age, false];
      setNuevaPelicula(movie);
    } 
  }
  
  return (
    <div>
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
            value={age}
            type="number"
            placeholder="ej. 2012"
            onChange={(e) => setAge(Number(e.target.value))}/><br/>

          <button onClick={onSaveMovie}>Añadir película</button>
        </div>
      </div>

      <h2>Lista de Películas</h2>
      <MovieCard favoritas={false} newMovie={nuevaPelicula}
      />
    </div>
  );
};