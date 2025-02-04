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
    await fetch("http://120.0.0.1/api/question", {
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
}
