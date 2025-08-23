import { useEffect, useState } from "react";
// import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";
import GameService from "../services/games-service";
import GamesFilter from "./GamesFilter";
import AddNewGame from "./AddNewGame";

const gamesService = new GameService();

export default function GamesContainer() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [view, setView] = useState("cards");
  const [newGameDialog, setNewGameDialog] = useState(false);

  // Fetch data and assign initial games array
  useEffect(() => {
    gamesService
      .getGames()
      .then((gamesArray) => {
        setGames(gamesArray);
        setFilteredGames(gamesArray);
      })
      .catch((err) => console.log(err));
  }, []);

  // Callback function that will take in a modified games array and setFilteredGames
  const handleFilter = (modifiedArray) => {
    setFilteredGames(modifiedArray);
  };

  // Callback function that will take in new game object and add to database
  const onAdd = (newGame) => {
    setGames([...games, newGame]);
    setFilteredGames([...filteredGames, newGame]);
    onClose();
  };

  // Callback function that will close the modal box
  const onClose = () => {
    setNewGameDialog(false);
  };

  const openModal = () => {
    setNewGameDialog(true);
  };

  return (
    <>
      {/* Games Filter Bar */}
      <GamesFilter games={games} handleFilter={handleFilter} />
      <div className="d-flex p-2 justify-content-between">
        {/* Add new game button */}
        <div>
          <button className="playButton" onClick={openModal}>
            Create a New Game
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={() => setView("cards")} className="playButton">
            ⏹️ Card View
          </button>
          <button onClick={() => setView("table")} className="playButton">
            🥅 Table View
          </button>
        </div>
      </div>
      {newGameDialog && <AddNewGame onClose={onClose} onAdd={onAdd} />}
      <GamesList games={filteredGames} view={view} />
    </>
  );
}
