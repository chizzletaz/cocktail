const cocktailList = document.getElementById('cocktailList');
const searchBar = document.getElementById('search');
const form = document.getElementById('searchBar');
const noresult = document.getElementById('noresults');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cocktailName = searchBar.value;
    setUrl(cocktailName);
})


function setUrl(x) {
    chosenUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${x}`;
    getCocktailByName(chosenUrl);
}

function createCocktailCard(name, img, cat, id) {
    var cocktailCard = `
            <div class='card h-100'>
                <img src=${img} id="cocktailImg" class="card-img-top img-fluid" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title" id="cocktailName">${name}</h5>
                    <small>Category: ${cat}</small>
                </div>
                <div class="text-center mb-4">
                    <a data-drinkId="${id}" class="btn btnCocktail">Make Cocktail</a>
                </div>
            </div>
        `

    return cocktailCard;
}

function getCocktailByName(chosenUrl) {
    fetch(chosenUrl)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    if (data.drinks == null) {
                        noresult.innerHTML = `<h4>Sorry there are no cocktails with that name</h4>`;
                    } else {
                        displayCocktails(data);
                    }
                    // console.log(data)
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function displayCocktails(cocktail) {
    cocktailList.innerHTML = '';
    var drinks = cocktail.drinks;
    var cocktailCards = [];

    for (let i = 0; i < drinks.length; i++) {
        var drink = drinks[i];
        var name = drink.strDrink;
        var img = drink.strDrinkThumb;
        var cat = drink.strCategory;
        var id = drink.idDrink;
        var cocktailCard = createCocktailCard(name, img, cat, id);

        cocktailCards.push(cocktailCard);

    }

    // loop over each cocktail and append it to 'cocktailList'
    cocktailCards.map(cocktailCard => {
        var z = document.createElement('div');
        z.classList.add('col');
        z.innerHTML = cocktailCard;
        cocktailList.appendChild(z);
    })

}

$(document).on("click", ".btnCocktail", function (e) {
    id = e.target.getAttribute("data-drinkId");
    localStorage.setItem('drinkId', id);
    location.href = "cocktail.html";
})