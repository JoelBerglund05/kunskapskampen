import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Validate from "./Validate.js";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://quchkaleqfbxkufbskck.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
    );
  }

  async SignUpUser(email, username , password) {
    const validation = new Validate();
    if (!validation.ValidatePassword()) {
      return;
    }

    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password[0],
      options: {
        data: {
          display_name: username,
        },
      },
    });

    if (error) {
      console.log("kunde inte skapa konto: ", error);
    } else if (data) {
      window.location.replace("https://joelberglund05.github.io/kunskapskampen");
    }
  }

  async SignInUser(email, password) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: email,
      password: password[0],
    });
    console.log(data);
    if (error) {
      console.log("Kunde inte logga in: ", error);
    } else if (data) {
      window.location.replace("https://joelberglund05.github.io/kunskapskampen");
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
    } = await this.supabase.auth.getUser();
    return user;
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
    await fetch(
      "https://5b73-2001-2042-752b-8000-a331-b677-c2f4-f069.ngrok-free.app/api/my-games",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsImtpZCI6IkZBVEMvdm5lYW9uVVFJMXciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3F1Y2hrYWxlcWZieGt1ZmJza2NrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4NzkxMDA1LCJpYXQiOjE3Mzg3ODc0MDUsImVtYWlsIjoianVkb2pvbGxlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZGlzcGxheV9uYW1lIjoic29sZW4iLCJlbWFpbCI6Imp1ZG9qb2xsZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczODc4NzQwNX1dLCJzZXNzaW9uX2lkIjoiMGEzNzM3YWItMWUwMS00MjRiLWJmNmMtOGY1MTJlNDFkYjIzIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.aZ3fD8xrtwxry5f0gHR9QvYPCnaLZ1DqJIRyANGGIEc",
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
      },
    )
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
