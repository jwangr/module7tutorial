import { useEffect, useState } from "react";

// GamesFilter will take in 2 props:
// 1) Games array
// 2) Callback function which takes in (filteredGames)
export default function GamesFilter({ games, handleFilter }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Sort by: Default");
  const [genre, setGenre] = useState("");

  // Changing filter states
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter booleans
  const matchesGenre = (game, genre) => {
    return genre === "" || genre === game?.genre;
  };

  const matchesSearch = (game, search) => {
    return (
      search === "" || game.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Sort logic
  const AZSort = (cars) => {
    return [...cars].sort((a, b) => a.title.localeCompare(b.title));
  };

  const ZASort = (cars) => {
    return [...cars].sort((a, b) => b.title.localeCompare(a.title));
  };

  // Filter logic => uses callback function, handleFilter
  useEffect(() => {
    let filtered = games.filter((game) => {
      return matchesGenre(game, genre) && matchesSearch(game, search);
    });

    if (sort === "A-Z") {
      filtered = AZSort(filtered);
    } else if (sort === "Z-A") {
      filtered = ZASort(filtered);
    }
    handleFilter(filtered);
  }, [genre, search, sort]);

  return (
    <div className="filter-bar">
      <input type="text" value={search} onChange={handleSearch} />
      <select value={genre} onChange={handleGenre}>
        <option value="">All</option>
        <option value="ARPG">ARPG</option>
        <option value="MMORPG">MMORPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Strategy">Strategy</option>
      </select>
      <select value={sort} onChange={handleSort}>
        <option value="Sort by: Default">Sort by: Default</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
}
