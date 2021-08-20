var power = 0;
var gold = 0;
var rank = 0;

function powerClick(number){
    power = power + number;
    document.getElementById("power").innerHTML = power;
}

function attackClick(){
    //calculates an attack with stored power and updates board
    console.log("attacking...");
    var dmg = power;
    var flinch = Math.floor(dmg / 5);
    power = 0;
    currentDemon.curHealth -= dmg;
    dmg = 0;
    currentDemon.speed += flinch;
    flinch = 0;
    document.getElementById("power").innerHTML = power;
    document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
    document.getElementById("demonattack").innerHTML = currentDemon.speed;
}

function saveGame(){
    localStorage.gold = gold;
    localStorage.rank = rank;
    console.log("Game has been saved");
}

function loadGame(){
    if(!localStorage.rank) return;
    rank = localStorage.rank;
    gold = localStorage.gold;
    console.log("Game has been loaded");
}

function toggleAbout(){
    var about = document.getElementById("about_screen");
    if(about.style.display == "block"){
        about.style.display = "none";
    } else {
        about.style.display = "block";
    }
}