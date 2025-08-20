import { useState } from "react";

export default function GamesFilter({
  sort,
  setSort,
  category,
  setCategory,
  search,
  setSearch,
}) {
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="filter-bar">
      <input type="text" value={search} onChange={handleSearch} />
      <select value={category} onChange={handleCategory}>
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
