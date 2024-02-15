let uri = 'https://api.spoonacular.com/' ;
let endPoint = '' ;
let apiKey = '?apiKey=79894e65a7644754ab9f8dcd0e0b2828';
let query = '&query=';
let recipes = [];
let form = document.querySelector('form')
let input = document.querySelector('form input')
let result = document.querySelector('.result')

function fetchData(url) {
    fetch(url)
        .then(reponse => reponse.json())
        .then(data => addDataToHtml(data.searchResults))
        .catch(err => console.error(err))
}

const addDataToHtml = data =>{
    console.log(data[0].results);
    data[0].results.map( e =>
        result.innerHTML +=  ` 
        <div class="card my-3" style="width: 18rem;">
             <img src="${e.image}" class="" alt="recette Lemon Pie">
             <div class="card-body ">
                <h5 class="card-title ">${e.name}</h5>
                <p class="card-text">Lemon Pie requires approximately <b>45 minutes</b> from start to finish.</p>
                <a href="${e.link}" class="btn btn-primary">Cliquez pour voir la recette 🍴</a>
             </div>
        </div>`
        )};

form.addEventListener('submit' , e => {
    e.preventDefault()
    result.innerHTML = "";
    let searchValue = input.value.trim();
    if (searchValue.length > 0){
        endPoint = 'food/search'
        query = `&query=${searchValue}`;
        let url = `${uri}${endPoint}${apiKey}${query}`
        fetchData(url)
        console.log(url);
    }else {
        
        result.innerHTML = "<h1 class='text-danger text-decoration-underline '>saisir une recherche valide</h1>" ;
    }
});



// input.addEventListener('input' , e => {
//     if (e.target.value.length > 4 ) {
//         query = `&query=${e.target.value}`;
//         endPoint = 'food/search'
//         let url = `${uri}${endPoint}${apiKey}${query}`
//         fetchData(url)
//         console.log(url);
//     }
// })
