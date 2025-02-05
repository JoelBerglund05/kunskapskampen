import RenderTemplate from "./RenderTemplate.js";

export default class RenderFriendTemplate extends RenderTemplate {
    constructor() {
        super({})
        this.templateNode = document.getElementById("friend-card");
        this.friendContainer =  document.getElementById("friend-list");
    }

    async RenderFriendList (dataBase) {
        await dataBase.GetFriends();
        const friends = JSON.parse(sessionStorage.getItem("friends"));

        for (let i = 0; i < friends.friends.length; i++) {
            this.Render(this.templateNode, this.friendContainer);
            this.friendContainer.querySelectorAll("h2.p-2")[i].textContent = friends.friends[i].name; 
            this.friendContainer.querySelectorAll(".play-against-btn")[i].setAttribute("id", "playAgainst" + i);
        }    
    }
    
}