// script.js

function showAlert() {
    alert("Hello! You clicked the button.");
}

let count = 0;

function incrementCounter() {
    count += 1;

    document.getElementById("counter").innerText = count;
}