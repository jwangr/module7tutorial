export default function SingleGame({ game, view }) {
  const imgStyle = {
    backgroundImage: `url(${game.thumbnail})`,
  };

  if (view === "cards") {
    return (
      <div className="card">
        <div className="img-container m-0" style={imgStyle}></div>
        <div>
          <h2>{game.title}</h2>
        </div>
        <div className="genre">
          <div>{game.genre}</div>
          <a className="playButton" target="_blank" href={game.gameUrl}>
            Play
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <tr>
        <td scope="row">{game.title}</td>
        <td>{game.genre}</td>
        <td>
          <a className="playButton" target="_blank" href={game.gameUrl}>
            Play
          </a>
        </td>
      </tr>
    );
  }
}
