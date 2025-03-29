import RenderTemplate from "./RenderTemplate.js";

export default class RenderMainScreen extends RenderTemplate {
  constructor() {
    super({});
    this.templateNode = document.getElementById("hasLoggedIn");
    this.friendContainer = document.getElementById("mainContainer");
  }

  async RenderScreen(dataBase) {
    const { data, error } = await dataBase.supabase.auth.getUser();

    if (error) {
      this.templateNode = document.getElementById("hasNotLoggedIn");
    }
    this.Render(this.templateNode, this.friendContainer);
  }
}
