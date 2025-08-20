import SingleGame from "./SingleGame";

export default function GamesList({ games, view }) {
  if (view === "cards") {
    return (
      <div className="grid4Col m-3">
        {games.map((game) => (
          <SingleGame key={game.id} game={game} view={view} />
        ))}
      </div>
    );
  } else {
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
  }
}
