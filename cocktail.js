/*jshint esversion: 6 */
window.onload = setUrl();

const cocktailList = document.getElementById('cocktailList');

function setUrl() {
    var id = JSON.parse(localStorage.getItem('drinkId'));
    chosenUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(chosenUrl);
    getSingleCocktail(chosenUrl);
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
                    displaySingleCocktail(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function createSingleCocktailCard(name, img, cat, alc, glass, ingredients, steps) {
    var cocktailCard =
        `
        <h3 class="card-title">${name}</h3>
        <div class="card mb-3"">
            <div class="row align-items-center g-0">
                <div class="col-md-4">
                    <img src=${img} class="img-fluid rounded-start" alt=${name}>
                </div>
                <div class="col-md-8">
                    <div class="card-body">           
                        <div class="info">
                            <p><i class="fas fa-tag"></i> Category: <span>${cat}</span></p>
                            <p><i class="fas fa-wine-bottle"></i> Alcholic: <span>${alc}</span></p>
                            <p><i class="fas fa-glass-martini-alt"></i> Glass: <span>${glass}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5" id="ingredient">
                    <h4>Ingredients</h4>
                    <ul>${ingredients}</ul>
                </div>
                <div class="col-md-7" id="step">
                    <h4>Steps</h4>
                    <ol>${steps}</ol>
                </div>
            </div>
        </div>`;
    return cocktailCard;
}

function displaySingleCocktail(cocktail) {
    cocktailList.innerHTML = '';
    var drinks = cocktail.drinks;
    var drink = drinks[0];
    var name = drink.strDrink;
    var img = drink.strDrinkThumb;
    var cat = drink.strCategory;
    var alcoholic = drink.stringAlcoholic;
    var alc = alcoholic === 'Alcoholic' ? 'Yes' : 'No';
    var glass = drink.Glass;
    var ingredients = "";

    // create measure and ingredient loop
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
            ingredients += `<li><input type="checkbox" /> ${measure} of ${ingredient}</li>`;
        }
    }

    // create instructions
    var instruction = drink.strInstructions;
    var instructions = instruction.split(". ");
    // remove the period from the last element of instruction
    var oldinstr = instructions[instructions.length - 1];
    var newinstr = oldinstr.substring(0, oldinstr.length - 1);
    instructions[instructions.length - 1] = newinstr;

    var steps = ``;
    instructions.forEach((step) => {
        steps += `<li>${step}.</li>`;
    });

    var cocktailCard = createSingleCocktailCard(name, img, cat, alc, glass, ingredients, steps);

    cocktailList.innerHTML = cocktailCard;
}