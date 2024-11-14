function moreInfo() {
    alert("In this simulator-esque game, you make software to get rich. Hire students to increase productivity! Try it out in the 'Play' section!");
}

let count = 0;

function incrementCounter(x) {
    count += x;

    document.getElementById("counter").innerText = count;
    document.getElementById("money").innerText = 4 * count;
}

let students = 0;

function hireStudent() {
    if (count >= 5){
        count -= 5;
        document.getElementById("counter").innerText = count;
        document.getElementById("money").innerText = 4 * count;

        students += 1;
        document.getElementById("students").innerText = students;
        document.getElementById("softwares").innerText = 2 * students;
        if (!autoIncrementInterval) {
            startAutoIncrement();
        }
    }
    else{
        alert("You need $20 to hire a student.");
    }
}

let autoIncrementInterval;

function startAutoIncrement() {
    autoIncrementInterval = setInterval(function() {
        incrementCounter(2 * students);
    }, 1000);
}

function stopTimer(){
    clearInterval(autoIncrementInterval);
    autoIncrementInterval = null;
}

function win(){
    if (count >= 250){
        stopTimer();

        count = 0;
        document.getElementById("counter").innerText = count;
        document.getElementById("money").innerText = 4 * count;

        students = 0;
        document.getElementById("students").innerText = students;
        document.getElementById("softwares").innerText = 2 * students;
        alert("You have won the game! - Arthur");
    }
    else{
        alert("You need $1000 to win this game.");
    }
}