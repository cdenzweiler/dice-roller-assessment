console.log("keep going")
////////// Var  ///////
let dice = document.querySelector("#dice")
let roll = document.querySelector("#roll")
let total = document.querySelector("#total")
let show = document.querySelector("#show")
let show_button = document.querySelector("#show_button")

diceRolls = []

//////////  Roll Button   ///////////////

roll.addEventListener("click", function () {
    count = 0

    while (count < dice.value) {

        let dieIndiv = (Math.floor(Math.random() * 6 + 1));

        diceRolls.push(dieIndiv)
        count++;

    }

    sum = (diceRolls.reduce((a, b) => a + b, 0));

    total.innerHTML = `Total of ${dice.value} dice Rolled: ${sum}`;

})



//////////////// Show area //////////

show_button.addEventListener("click", function () {

    // diceRolls.forEach(element => show.innerHTML = '<li>' + diceRolls);

    diceRolls = '<li id="dice">' + sum + "</li>";
    show.innerHTML = '<li id="dice">' + diceRolls + "</li>";
})

/////////// Clear Button  ///////////////////


let clear = document.querySelector("#clear")
clear.addEventListener("click", function () {
    diceRolls = [];
    dice.value = 0;
    show.innerHTML = "";
    total.innerHTML = "Total:";
})

// 
// allRollsElement.innerHTML += newDiceString;

// console.log(newDiceString)

