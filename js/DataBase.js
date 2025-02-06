import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Validate from "./Validate.js";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
  }

  async GetARowFrom(table, idToRow) {
    const { data, error } = await this.supabase.from(table).select();

    if (error) {
      console.log("Kunde inte hämta data: ", error);
      return;
    }
    return data;
  }

  async SignUpUser(email, password) {
    const validation = new Validate();
    if (!validation.ValidatePassword()) {
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
      console.log("swqeawd ", error);
    }
    console.log(this.supabase.auth.getUser());
    console.log(error);
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
    } = await this.supabase.auth.getUser();
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
  async GetQuestion(category) {
    await fetch("http://127.0.0.1/api/question", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("question", JSON.stringify(json));
      });
  }
  
  async GetGames() {
    await fetch("https://f054-2a00-801-77f-a948-afdf-fdbe-59b5-1318.ngrok-free.app/api/my-games", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "",
        Apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
        "ngrok-skip-browser-warning": "joel iz glad", 
      }
    })
    .then((response) => response.json())
    .then((json) => {
      sessionStorage.setItem("games", JSON.stringify(json));
    });
  }
  async GetFriends() {
    await fetch("http://127.0.0.1/api/my-friends", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "",
        Apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
        "ngrok-skip-browser-warning": "joel iz glad", 
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("friends", JSON.stringify(json));
      });
  }
  async CreateFriendGame(index) {
    const friends = JSON.parse(sessionStorage.getItem("friends"));
    console.log("hej", friends.friends[index].email);
    await fetch("http://127.0.0.1/api/create-game-friend", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "",
        Apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
        "ngrok-skip-browser-warning": "joel iz glad", 
      },
      body: JSON.stringify({
        friend_email: friends.friends[index].email,
      }),
    }).then((response) => {
      if (response.ok) {
        window.location.replace("http://127.0.0.1:5501/");
      }
    });
  }
}
