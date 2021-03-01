const list = document.querySelector('#red');

const champ = document.querySelector('.input-field');
console.log(champ);

const bouton = document.querySelector('.recherche');
bouton.addEventListener('click', (event) => {
    event.preventDefault();
    list.innerHTML = "";
    let resulta = champ.value;
    alert(resulta);

    let url = `http://www.omdbapi.com/?s=${resulta}&apikey=891ea8b8`;

fetch(url)
.then(response => response.json())
.then((data) => {
    data.Search.forEach(element => {
           list.insertAdjacentHTML('beforeend',`
            <div class="card" alt="Card image cap">
                <div class="card-body">
                <img src="${element.Poster}"></img>
                <h5 class="card-title">${element.Title}</h5>
                </div>
            </div>
            `)
        });
    });
});






// const batman = document.querySelector('ul')
// data.Search.forEach(element => {
//     batman.insertAdjacentHTML('beforeend',`
//     <div class="card" alt="Card image cap">
//         <div class="card-body">
//         <img src="${element.Poster}"></img>
//         <h5 class="card-title">${element.Title}</h5>
//         </div>
//     </div>
//     `) 
// });
//  let searchqueryElement = document.querySelector('#search');
//  document.querySelector('form').addEventListener('submit',function(event){event.preventDefault();
// if(searchqueryElement.value){
//     fetch(`http://omdb-api.now.sh/?s=${searchqueryElement.value}`)
//     .then(function(response){return response.json()})
//     .then(function(dat){console.log(data)});
// }})


// });

// const brecherche = document.addEventListener("click", () =>{
//     alert (brecherche.insertAdjacentHTML('beforeend', 'batman'))
// ;
// });
