/*jshint esversion: 6 */
const letters = document.getElementById('letters');
const cocktailList = document.getElementById('cocktailList');
const cocktailnumbers = document.getElementById('cocktailnumbers');


// create letters for search by letter
function setLetters() {
    var alphabet = '';
    var l;
    for (var i = 65; 90 >= i; i++) {
        // don't show buttons for u and x
        if (i == 85 || i == 88) {
            continue;
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
        `;

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
    });
}

$(document).on("click", ".btnCocktail", function (e) {
    id = e.target.getAttribute("data-drinkId");
    localStorage.setItem('drinkId', id);
    location.href = "cocktail.html";
});

// find out the number of cocktails per letter
function numberOfCocktails() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z"];
    var numberofcocktails = [];

    alphabet.forEach(letter => {
        chosenUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

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
                        // displayNumberOfCocktails(data);
                        numbers = data.drinks.length;
                        numberofcocktails.push(numbers);

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    });
    console.log(numberofcocktails);
}

numberOfCocktails();