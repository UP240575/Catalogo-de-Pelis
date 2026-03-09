'use client'

import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

export default function Home() {



useEffect(() => {
    console.log("🎬🚀 Aplicación NIXFLIX iniciada correctamente");
    console.log("📽️ Catálogo cargado con", peliculas.length, "películas");
    console.log("❤️ Favoritos iniciales:", peliculasFav.length, "películas");
  }, []); 

  
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
  <main style={{
  backgroundColor: '#141414',
  minHeight: '100vh',
  padding: '20px 40px',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
}}>
  {/* Header estilo Netflix */}
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
    padding: '10px 0'
  }}>
    <h1 style={{
      color: '#e50914',
      fontSize: '2.5rem',
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
      letterSpacing: '-1px'
    }}>
      NIXFLIX
    </h1>
  </div>

  {/* Hero Section */}
  <div style={{
    height: '400px',
    borderRadius: '8px',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    position: 'relative'
  }}>
    <div>
      <h2 style={{ color: '#fff', fontSize: '3rem', margin: '0 0 20px 0' }}>  Catalogo de Peliculas</h2>
      <p style={{ color: '#fff', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
        En este pagina web, podras navegar en nuestros distintos apartados.<br/>
        Desde poder ver todo el catalogo que incluimos.<br/>
        Tus peliculas favoritas del momento.<br/>
        O si es necesario, poder añadir peliculas nuevas a nuestro catalogo.<br/>      </p>

    </div>
  </div>

  {/* Sección Añadir Películas */}
  <div style={{ marginBottom: '50px' }}>
    <h2 style={{
      color: '#fff',
      fontSize: '1.8rem',
      fontWeight: 500,
      marginBottom: '20px'
    }}>
      Añadir película
    </h2>
    
    <div style={{
      backgroundColor: '#1f1f1f',
      borderRadius: '8px',
      padding: '30px'
    }}>
      <form style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label style={{ color: '#aaa', fontSize: '0.9rem', display: 'block', marginBottom: '5px' }}>Título</label>
          <input 
            style={{
              width: '90%',
              padding: '12px',
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '1rem'
            }}
            value={name}
            placeholder="Ej. Piratas del Caribe"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div style={{ flex: 1 }}>
          <label style={{ color: '#aaa', fontSize: '0.9rem', display: 'block', marginBottom: '5px' }}>Año</label>
          <input 
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
              fontSize: '1rem'
            }}
            value={year}
            type="number"
            placeholder="2024"
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        
        <button 
          type="button"
          style={{
            backgroundColor: '#e50914',
            color: 'white',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            height: '45px'
          }}
          onClick={onSaveMovie}>
          + Añadir
        </button>
      </form>
    </div>
  </div>

  {/* Secciones de películas estilo Netflix */}
  <div style={{ marginBottom: '40px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 500, margin: 0 }}>
        Catálogo completo
      </h2>
    </div>
    
    <div
      >
      <MovieCard
        favoritas={false}
        peliculas={peliculas}
        onMovieFav={onAddFav}
      />
    </div>
  </div>

  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 500, margin: 0 }}>
        Mi lista
      </h2>
    </div>
    
    <div >
      <MovieCard
        favoritas={true}
        peliculas={peliculasFav}
        onMovieFav={onRemoveFav}
      />
    </div>
  </div>
</main>
  );
}