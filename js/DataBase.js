import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://quchkaleqfbxkufbskck.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU"
    );
  }

  async SignUpUser(email, username, password) {
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

      window.location.replace(
        "https://joelberglund05.github.io/kunskapskampen/"
      );

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
      window.location.replace(
        "https://joelberglund05.github.io/kunskapskampen/"
      );

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
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/question",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("question", JSON.stringify(json));
      });
  }

  async GetGames() {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/my-games",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("games", JSON.stringify(json));
      });
  }
  async AddPoints(answers) {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    const gameId = parseInt(sessionStorage.getItem("gameId"));

    await fetch(

      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/set-points",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
        body: JSON.stringify({
          answers: [answers[2], answers[1], answers[0]],
          id: gameId,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("games", JSON.stringify(json));
      });
  }
  async GetFriends() {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/my-friends",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("friends", JSON.stringify(json));
      });
  }
  async CreateFriendGame(index) {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    const friends = JSON.parse(sessionStorage.getItem("friends"));
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/create-game-friend",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
        body: JSON.stringify({
          friend_email: friends.friends[index].email,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        window.location.replace(
          "https://joelberglund05.github.io/kunskapskampen/"
        );
      }
    });
  }

  async CreateGame(gameHistory) {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    const friends = JSON.parse(sessionStorage.getItem("friends"));
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/create-game",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
      }
    ).then((response) => {
      if (response.ok) {
        gameHistory.RenderMatchHistory();
      }
    });
  }

  async addFriend(friendEmail, messageElement) {
    const authKey = JSON.parse(
      localStorage.getItem("sb-quchkaleqfbxkufbskck-auth-token")
    );
    const friends = JSON.parse(sessionStorage.getItem("friends"));
    await fetch(
      "https://pwa-quizz-game-back-end-main-v2etsa.laravel.cloud/api/add-friend",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authKey.access_token,
          Apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
          "ngrok-skip-browser-warning": "joel iz glad",
        },
        body: JSON.stringify({
          friend_email: friendEmail,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        messageElement.querySelector(".succes").classList.add("visible");
        messageElement.classList.add("visible");
      } else {
        console.log(messageElement.querySelector(".warning").classList);
        messageElement.querySelector(".warning").classList.add("visible");
        messageElement.classList.add("visible");
      }
    });

  }
}
