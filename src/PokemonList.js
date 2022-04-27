import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div className="box">
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
