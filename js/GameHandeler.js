export default class GameHandeler {
  constructor() {}
  async CreateGame(dataBase) {
    const activeGames = await dataBase.GetAllActiveGames();
    const user = await dataBase.GetUser();

    let foundEmptyGame = false;
    activeGames.forEach(async (emptyId) => {
      if (
        emptyId.userId2 === null &&
        !foundEmptyGame &&
        emptyId.userId1 !== user.id
      ) {
        foundEmptyGame = true;
        emptyId.userId2 = user.id;
        await dataBase.UpdateSpesificActiveGame(emptyId.id);
      }
    });

    if (!foundEmptyGame) {
      dataBase.CreateGame();
    }
  }
  async GetMyActiveGames() {
    const activeGames = await dataBase.GetAllActiveGames();
    const user = await dataBase.GetUser();

    //TODO: Fix stuff
    activeGames.forEach(async (emptyId) => {
      if (emptyId.userId2 === user.id || emptyId.userId1 !== user.id) {
        foundEmptyGame = true;
        emptyId.userId2 = user.id;
        await dataBase.UpdateSpesificActiveGame(emptyId.id);
      }
    });
  }
}
