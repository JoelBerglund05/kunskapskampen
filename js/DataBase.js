import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
  }

  async GetARowFrom(table, idToRow) {
    const { data, error } = await this.supabase
      .from(table)
      .select()
      .eq("id", idToRow);

    if (error) {
      console.log("Kunde inte hämta data: ", error);
      return;
    }
    return data;
  }

  async SignUpUser(email, password) {
    if (password[0] !== password[1]) {
      alert("Lösenorden är inte samma");
      return;
    }

    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("kunde inte skapa konto: ", error);
    }
  }

  async SignInUser(email, password) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log("Kunde inte logga in: ", error);
    }
  }

  async LogOutUser() {
    let { error } = await this.supabase.auth.signOut();
    if (error) {
      console.log("kunde inte logga ut: ", error);
    }
  }

  async GetUser() {
    const {
      data: { user },
      error,
    } = await this.supabase.auth.getUser();

    if (error) {
      console.log("Kunde inte hitta användaren: ", error);
      return;
    }
    return user;
  }

  async CreateGame() {
    const initialPoints = 0;
    const user = await this.GetUser();

    const { data, error } = await this.supabase
      .from("activeGames")
      .insert([
        {
          player1Points: initialPoints,
          player2Points: initialPoints,
          playerTurn: user.id,
          userId1: user.id,
        },
      ])
      .select();

    if (error) {
      console.log("Kunde inte spara data: ", error);
    }
  }

  async GetAllActiveGames() {
    const { data, error } = await this.supabase.from("activeGames").select();

    if (error) {
      console.log("Kunde inte hämta data: ", error);
    }
  }

  async UpdateSpesificActiveGame(activeGameId) {
    const user = await this.GetUser();

    const { data, error } = await this.supabase
      .from("activeGames")
      .update({ userId2: user.id })
      .eq("id", activeGameId)
      .select();

    if (error) {
      console.log("Kunde inte updatera data: ", error);
    }
  }
}
