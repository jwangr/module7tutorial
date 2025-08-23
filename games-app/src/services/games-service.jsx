export default class GameService {
  async getGames() {
    const response = await fetch(
      "https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json"
    )
    const data = await response.json()
    return data;
  }
}
