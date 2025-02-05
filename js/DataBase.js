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

  async GetFriends() {
    await fetch("http://127.0.0.1/api/my-friends", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkZBVEMvdm5lYW9uVVFJMXciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3F1Y2hrYWxlcWZieGt1ZmJza2NrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4NzY5Mjc5LCJpYXQiOjE3Mzg3NjU2NzksImVtYWlsIjoianVkb2pvbGxlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZGlzcGxheV9uYW1lIjoic29sZW4iLCJlbWFpbCI6Imp1ZG9qb2xsZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczODc2NTY3OX1dLCJzZXNzaW9uX2lkIjoiNzc2NjhiYzctMmIyMi00MjIwLWEyNGMtY2RkZmExODMyZjczIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.gfxdAWm0SY4kXv45uUJifquhPFSc-Zg7W5G3PmVYgtI",
        Apikey: ""
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("friends", JSON.stringify(json));
      });
  }
  async CreateFriendGame(index) {
    const friends = JSON.parse(sessionStorage.getItem("friends"));
    console.log("hej", friends.friends[index].email)
    await fetch("http://127.0.0.1/api/create-game-friend", {
      method: "POST",
      headers: {
        accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkZBVEMvdm5lYW9uVVFJMXciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3F1Y2hrYWxlcWZieGt1ZmJza2NrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4NzY5Mjc5LCJpYXQiOjE3Mzg3NjU2NzksImVtYWlsIjoianVkb2pvbGxlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZGlzcGxheV9uYW1lIjoic29sZW4iLCJlbWFpbCI6Imp1ZG9qb2xsZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczODc2NTY3OX1dLCJzZXNzaW9uX2lkIjoiNzc2NjhiYzctMmIyMi00MjIwLWEyNGMtY2RkZmExODMyZjczIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.gfxdAWm0SY4kXv45uUJifquhPFSc-Zg7W5G3PmVYgtI",
        Apikey: ""
      },
      body: JSON.stringify({
        friend_email: friends.friends[index].email,
      })
    })
      .then((response) => {
        if (response.ok) {
          window.location.replace("http://127.0.0.1:5501/");
        }
      });
    }
}
