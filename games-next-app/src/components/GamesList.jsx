"use client";

import SingleGame from "./SingleGame";

export default function GamesList({ games, searchParams, view }) {
  if (view === "cards") {
    return (
      <table className="table m-3">
        <thead>
          <th scope="col">Name</th>
          <th scope="col">Genre</th>
          <th scope="col">Play</th>
        </thead>
        {games.map((game) => (
          <SingleGame key={game.id} game={game} view={view} />
        ))}
      </table>
    );
  } else {
    return (
      <div className="grid4Col m-3">
        {games.map((game) => (
          <SingleGame key={game.id} game={game} />
        ))}
      </div>
    );
  }
}
