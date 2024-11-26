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
        console.log(
          "Stämmer detta? ",
          emptyId.userId1 !== user.id,
          user.id,
          emptyId.userId1,
        );
        foundEmptyGame = true;
        emptyId.userId2 = user.id;
        await dataBase.UpdateSpesificActiveGame(emptyId.id);
      }
    });

    if (!foundEmptyGame) {
      dataBase.CreateGame();
      console.log("yeppi!");
    }
  }
}
