

let sandwichMaker = function () {
    let sandwichIngredients = [];
    return function (ingredients) {
        sandwichIngredients.push(ingredients)
        let finalResponse = "One sandwich with ham";
        for (let i = 0; i < sandwichIngredients.length; i++) {
            let currentIngredient = sandwichIngredients[i];
            finalResponse += ` and ${currentIngredient}`;
        }
        return finalResponse;
    }
};

let sandwich = sandwichMaker();
console.log(sandwich("cheese"));
console.log(sandwich("turkey"));
console.log(sandwich("pepperoni"));
