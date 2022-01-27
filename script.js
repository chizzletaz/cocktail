const url_random = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
const url_name = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const url_first = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const url_id = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

const letters = document.getElementById('letters');
const cocktailList = document.getElementById('cocktailList');

// create letters for search by letter
function setLetters() {
    var alphabet = '';
    var l;
    for (var i = 65; 90 >= i; i++) {
        // don't show buttons for u and x
        if (i == 85 || i == 88) {
            continue
        } else {
            l = String.fromCharCode(i);
            alphabet += '<button class="letter" onclick="setUrl(\'' + l + '\');">' + l + '</button>';
        }
    }
    letters.innerHTML = alphabet;
}

setLetters();


function setUrl(x) {
    chosenUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${x}`;
    getCocktails(chosenUrl);
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

function getRandomCocktail() {
    fetch(url_random)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    displayRandomCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function displayRandomCocktail(cocktail) {
    let drink = cocktail.drinks[0];

    cocktailName.innerHTML = drink.strDrink;
    img.src = drink.strDrinkThumb;

    for (let i = 1; i < 16; i++) {

        if (drink[`strIngredient${i}`] === null || drink[`strIngredient${i}`] === '') {
            break;
        }

        if (drink[`strMeasure${i}`] === null) {
            drink[`strMeasure${i}`] = '';
        }

        let item = document.createElement('li');
        item.innerHTML = drink[`strMeasure${i}`] + 'of ' + drink[`strIngredient${i}`];

        ingredient.appendChild(item);
    }

    instruction.innerHTML = drink.strInstructions;
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

    for (let i = 0; i < 9; i++) {
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

function getSingleCocktail(chosenUrl) {
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
                    displayCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function displaySingleCocktail(cocktail) {
    cocktailList.innerHTML = '';
    var drinks = cocktail.drinks;
    var drink = drinks[0];
    var name = drink.strDrink;
    var img = drink.strDrinkThumb;
    var steps = drink.strInstructions;
    var ingredients = "";

    for (let j = 1; j < 16; j++) {
        // Stop loop when the ingredients are null or empty
        if (drink[`strIngredient${j}`] === null || drink[`strIngredient${j}`] === '') {
            break;
        } else {
            // replace null with empty string
            if (drink[`strMeasure${j}`] === null) {
                drink[`strMeasure${j}`] = '';
            }
            var ingredient = drink[`strIngredient${j}`];
            var measure = drink[`strMeasure${j}`];
            ingredients += `<li>${measure} of ${ingredient}</li>`;
        }
    }

    var cocktailCard = createSingleCocktailCard(name, img, ingredients, steps);

    cocktailList.appendChild(cocktailCard);
}


$(document).on("click", ".btnCocktail", function (e) {
    id = e.target.getAttribute("data-drinkId");
    localStorage.setItem('drinkId', id);
    location.href = "cocktail.html";
})
