
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link href="/peliculas">
              Peliculas
            </Link>
          </li>

          <li>
            <Link href="/favoritas">
              Favoritas
            </Link>
          </li>

          <li>
            <Link href="/agregar">
              Agregar peliculas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};