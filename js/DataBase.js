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
}
