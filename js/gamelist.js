import GameHandeler from "./GameHandeler.js";

class Main {
  constructor() {
    this.gameHandeler = new GameHandeler();
  }

  async Main() {
    this.gameHandeler.InsertTemplate("result", "cont");
  }
}

const main = new Main();
main.Main();
