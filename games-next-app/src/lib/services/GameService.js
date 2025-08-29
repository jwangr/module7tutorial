export default class GamesService {
    async getGames() {
        const response = await fetch(
            "https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json"
        );
        const games = await response.json();
        return games;
    }
}