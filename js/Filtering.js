export default class Filtering {
  constructor() {
    this.nameInput = document.getElementById("name-input");
  }

  FilteringNames() {
    const games = JSON.parse(sessionStorage.getItem("games"));
    const user = localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token");
    const filteredGamse = [];

    games.games.forEach((game) => {
      if (
        game.user_name_1 === this.nameInput.value ||
        game.user_name_2 === this.nameInput.value
      ) {
        filteredGamse.push(game);
      }
    });

    return filteredGamse;
  }
}
