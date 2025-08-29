import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";
import GamesService from "@/lib/services/GameService";

export default async function GamesContainer({ searchParams }) {
  const gamesService = new GamesService();

  // const [games, setGames] = useState([]);
  // const [filteredGames, setFilteredGames] = useState([]);

  // const [view, setView] = useState("cards");

  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json"
  //   )
  //     .then((response) => response.json())
  //     .then((games) => {
  //       setGames(games);
  //       setFilteredGames(games);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   let filtered = games.filter((game) => {
  //     return matchesGenre(game, genre) && matchesSearch(game, search);
  //   });

  //   if (sort === "A-Z") {
  //     filtered = AZSort(filtered);
  //   } else if (sort === "Z-A") {
  //     filtered = ZASort(filtered);
  //   }
  //   setFilteredGames(filtered);
  // }, [genre, search, sort]);

  const params = await searchParams;
  const keyword = params?.keyword || "";
  const genre = params?.genre || "";

  const games = await gamesService.getGames();

  // Server-side filtering
  let filteredGames = games;
  if (keyword) {
    filteredGames = filteredGames.filter(game => game.title.toLowerCase().includes(keyword.toLowerCase()))
  }
  if (genre) {
    filteredGames = filteredGames.filter(game => game.genre === genre);
  }

  return (
    <>
      <GamesFilter keyword={keyword} genre={genre} />
      <GamesList games={games} searchParams={searchParams} />
    </>
  );
}
