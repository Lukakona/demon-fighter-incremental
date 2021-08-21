var power = 0;
var gold = 0;
var rank = 0;
var currentDemon;

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

//save values to local storage
function saveGame(){
    localStorage.gold = gold;
    localStorage.rank = rank;
    localStorage.currentDemon = JSON.stringify(currentDemon);
    console.log("Game has been saved");
    console.log(localStorage.currentDemon);
}

//load via localstorage values only if rank exists in localstorage
function loadGame(){
    if(!localStorage.rank || localStorage.rank==0) return;
    rank = Number(localStorage.rank);
    gold = Number(localStorage.gold);
    currentDemon = JSON.parse(localStorage.currentDemon);
    console.log("Game has been loaded");
    console.log(rank);
    console.log(gold);
}

//about the author (me)
function toggleAbout(){
    var about = document.getElementById("about_screen");
    if(about.style.display == "block"){
        about.style.display = "none";
    } else {
        about.style.display = "block";
    }
}

function mainLoop(){
    //creates all demons and spawns avia as first demon
    refreshDemons();
    document.getElementById("gold").innerHTML = gold;
    //currentDemon = Demons[0];
}

window.onload = function() {
    mainLoop();
    loadGame();
    saveGame();
    document.getElementById("gold").innerHTML = gold;
}