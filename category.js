const categories = document.getElementById('categories');
const cocktailList = document.getElementById('cocktailList');

function getCategories() {
    url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    setCategories(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

getCategories();

function setCategories(category) {
    var cat = category.drinks;
    var category = '';
    var c;
    for (let i = 0; i < cat.length; i++) {
        c = cat[i].strCategory;
        category += '<button class="category" onclick="setUrl(\'' + c + '\');">' + c + '</button>';
    }

    categories.innerHTML = category;
}

function setUrl(x) {
    chosenUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${x}`;
    getCocktails(chosenUrl);
}

function createCocktailCard(name, img, id) {
    var cocktailCard = `
            <div class='card h-100'>
                <img src=${img} id="cocktailImg" class="card-img-top img-fluid" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title" id="cocktailName">${name}</h5>
                </div>
                <div class="text-center mb-4">
                    <a data-drinkId="${id}" class="btn btnCocktail">Make Cocktail</a>
                </div>
            </div>
        `

    return cocktailCard;
}

function getCocktails(chosenUrl) {
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
                    displayCocktails(data);
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

    for (let i = 0; i < 16; i++) {
        var drink = drinks[i];
        var name = drink.strDrink;
        var img = drink.strDrinkThumb;
        var id = drink.idDrink;
        var cocktailCard = createCocktailCard(name, img, id);

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