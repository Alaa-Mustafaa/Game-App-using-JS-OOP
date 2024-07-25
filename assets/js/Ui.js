export class Ui{
    constructor(){}

    display(data){
        var box="";

        for(var i=0;i<data.length;i++){
            box+=`
            <div class="col-md-3 col-sm-6" style="height:100%">
             <a>
              <div class="col">
         <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button" "="">
            <div class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}">
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                 
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>
             
             
             </a>

            </div>`
        }

        document.getElementById("row").innerHTML=box;

    }


    displayOne(data){

        var box=""

        box +=`
        <div class="col-md-6">
        <img src="${data.thumbnail}" class="w-100"/>
        </div>
        <div class="col-md-6 text-white">
        <h2>Title: ${data.title}</h2>
        <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
        <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
        <p class="text-justify">${data.description}</p>
        <a class='btn btn-primary' href="${data.game_url}">Show game</a>
        </div>
        
        `
        document.getElementById("game-sections").innerHTML=box;

    }
}

