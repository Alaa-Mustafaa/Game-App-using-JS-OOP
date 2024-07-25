import { Ui } from "./Ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.getSpecificGame(id);
  }

  async getSpecificGame(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9c50787592mshfe3ddb3c287e900p164ed9jsnf7aac1c4ee3d",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const result = await response.json();
    console.log(result);

    this.ui.displayOne(result);
  }
}
