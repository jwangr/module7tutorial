"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function GamesFilter({keyword: initialKeyword="", genre: initialGenre=""}) {
  // const router = useRouter();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Sort by: Default");
  const [genre, setGenre] = useState("");

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const matchesGenre = (game, genre) => {
    return genre === "" || genre === game?.genre;
  };

  const matchesSearch = (game, search) => {
    return (
      search === "" || game.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  const AZSort = (cars) => {
    return [...cars].sort((a, b) => a.title.localeCompare(b.title));
  };

  const ZASort = (cars) => {
    return [...cars].sort((a, b) => b.title.localeCompare(a.title));
  };

  return (
    <div className="filter-bar">
      {/* Games Filter Bar */}
      <div className="filter-bar">
        <input type="text" value={search} onChange={handleSearch} />
        <select value={genre} onChange={handleGenre}>
          <option value="">All Genres</option>
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
        <div>
          <button
            onClick={() => setView("cards")}
            className="btn-outline-success"
          >
            ⏹️
          </button>
          <button
            onClick={() => setView("table")}
            className="btn-outline-success"
          >
            🥅
          </button>
        </div>
      </div>
    </div>
  );
}
