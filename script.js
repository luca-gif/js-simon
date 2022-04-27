const display = document.getElementById("display");
let numeriInseriti;
let randomNumbers;

for (let i = 0; i < 5; i++) {
    randomNumbers = Math.floor(Math.random() * 10);
    display.append(randomNumbers);
}

setTimeout(function() {
    reset();
}, 4000);

setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        numeriInseriti = parseInt(prompt("Inserisci i numeri che vedi uno ad uno"));
        console.log(numeriInseriti);
    }
    if (numeriInseriti === randomNumbers) {
        display.innerHTML = "Hai indovinato i numeri!";
    } else {
        display.innerHTML = "I numeri non sono corretti!";
    }
}, 5000);

function reset() {
    display.innerHTML = "";
}