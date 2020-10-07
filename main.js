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

   if (count < dice.value) {

        let dieIndiv = (Math.floor(Math.random() * 6 + 1));

        diceRolls.push(dieIndiv)
        count++;
        

    } 

    sum = (diceRolls.reduce((a, b) => a + b, 0));

        total.innerHTML = "Sum of " + dice.value + " dice Rolled: " + sum;
    // total.insertAdjacentText("beforeend", diceRolls);

})



//////////////// Show area //////////

show_button.addEventListener("click", function () {

    diceRolls.push(" apple", " carrot", " lima bean")
    diceRolls.forEach(element => show.innerHTML = '<li>' + diceRolls;

})

/////////// Clear Button  ///////////////////


let clear = document.querySelector("#clear")
clear.addEventListener("click", function () {
    diceRolls = [];
    dice.value = 0;
    show.innerHTML = "";
    total.innerHTML = "Total:";
})


