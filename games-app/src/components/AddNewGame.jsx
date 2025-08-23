// 2 buttons with callback functions
// 1) Adds a game

import { useState } from "react";

// 2) Closes the dialog box
export default function AddNewGame({ onAdd, onClose }) {
  const [game, setGame] = useState({
    id: "",
    title: "",
    thumbnail: "",
    shortDescription: "",
    gameUrl: "",
    genre: "",
    platform: "",
    publisher: "",
    developer: "",
    releaseDate: "",
    freetogameProfileUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({ ...game, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adding new game");
    if (game.title && game) {
      onAdd({ ...game, id: Date.now() });
      onClose();
    }
  };
  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Add New Game</h5>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-3">
                <label className="form-label">ID</label>
                <input
                  type="text"
                  name="id"
                  value={game.id}
                  onChange={handleChange}
                  className="form-control"
                />
              </div> */}

              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={game.title}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Thumbnail</label>
                <input
                  type="text"
                  name="thumbnail"
                  value={game.thumbnail}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Short Description</label>
                <textarea
                  name="shortDescription"
                  value={game.shortDescription}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Game URL</label>
                <input
                  type="text"
                  name="gameUrl"
                  value={game.gameUrl}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Genre</label>
                <input
                  type="text"
                  name="genre"
                  value={game.genre}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Platform</label>
                <input
                  type="text"
                  name="platform"
                  value={game.platform}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Publisher</label>
                <input
                  type="text"
                  name="publisher"
                  value={game.publisher}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Developer</label>
                <input
                  type="text"
                  name="developer"
                  value={game.developer}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Release Date</label>
                <input
                  type="date"
                  name="releaseDate"
                  value={game.releaseDate}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">FreeToGame Profile URL</label>
                <input
                  type="text"
                  name="freetogameProfileUrl"
                  value={game.freetogameProfileUrl}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              {/* Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close Box
                </button>
                <button type="submit" className="btn btn-primary">
                  Add New Game
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
