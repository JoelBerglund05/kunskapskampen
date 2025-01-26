import GameHandeler from "./GameHandeler.js";

class Main {
  constructor() {
    this.gameHandeler = new GameHandeler(); // Only keeping GameHandeler
  }

  async Main() {
    // Call the InsertTemplate method to copy the template content to the div
    this.gameHandeler.InsertTemplate("result", "cont");
  }
}

const main = new Main();
main.Main();
