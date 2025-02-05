export default class DataBase {
  async GetQuestion(category) {
    await fetch("https://eel-simple-highly.ngrok-free.app/api/question", {
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
    await fetch("https://5b73-2001-2042-752b-8000-a331-b677-c2f4-f069.ngrok-free.app/api/my-games", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorisation: "application/json",
        Apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU" 
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.setItem("games", JSON.stringify(json));
      });
  }
}
