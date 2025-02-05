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

  async GetMatch() {
    await fetch("https://5b73-2001-2042-752b-8000-a331-b677-c2f4-f069.ngrok-free.app/api/my-games", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsImtpZCI6IkZBVEMvdm5lYW9uVVFJMXciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3F1Y2hrYWxlcWZieGt1ZmJza2NrLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM4Nzc2ODAzLCJpYXQiOjE3Mzg3NzMyMDMsImVtYWlsIjoianVkb2pvbGxlQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsiZGlzcGxheV9uYW1lIjoic29sZW4iLCJlbWFpbCI6Imp1ZG9qb2xsZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1YmRjN2NmMC1hOWY1LTRiYjUtYjc3ZC00YmVlMjBiYTVjNjEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTczODc3MzIwM31dLCJzZXNzaW9uX2lkIjoiYzQ0YmZmNTAtZmI3YS00YzEwLTg4ZWQtOThjODg3Yzk3OGVkIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.gcmUEMXs0W5nGq3VAlZzEhj7Iy39zLF6kOLJUeZiUns",
        ApiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2hrYWxlcWZieGt1ZmJza2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNTk5ODksImV4cCI6MjA0NzkzNTk4OX0.FvXDzAPIRmSi3kDhT3pnOIxpVCJKHCtJ-Y3ot6Jv-hU",
        "ngrok-skip-browser-warning": "Hej"
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        sessionStorage.setItem("matches", JSON.stringify(json));
      });
  }
}
