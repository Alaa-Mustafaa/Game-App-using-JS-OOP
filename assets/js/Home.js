import { Details } from "./details.js";
import { Ui } from "./Ui.js";

export class Home {
   category;  
  constructor() {  
    
    document.querySelectorAll(".nav-link").forEach((link) => {
      
      // change the active class to the current link
      link.addEventListener("click",  ()=> {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");
        this.category=link.getAttribute("data-category");
        console.log(this.category) 

        // call getGames to fetch api data
        this.getGames(this.category)
                
      });
 
      
    });

    // display the data
    this.ui=new Ui();
    this.getGames("mmorpg")
  }


  async getGames(category) {
    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "9c50787592mshfe3ddb3c287e900p164ed9jsnf7aac1c4ee3d",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const response= await api.json();
    console.log(response)

        // display the data
    this.ui.display(response)

   document.querySelectorAll(".card").forEach((card)=>{

    card.addEventListener("click",()=>{
      document.getElementById("game-section").classList.remove("d-none");
      document.getElementById("home-section").classList.add("d-none");
      const id=card.getAttribute("data-id");
      
      new Details(id)
    })

   })
  
  }
}
