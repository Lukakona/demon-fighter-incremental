var power = 0;
var gold = 0;
var rank = 0;
var currentDemon;

//stores power every click
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

function resetData(){
    localStorage.clear();
    location.reload();
}

//hides all screens (should be used within the toggles, before setting a display)
function hideAll(){
    var about = document.getElementById("about_screen");
    var main = document.getElementById("main_screen");
    var resetScreen = document.getElementById("reset_screen");
    var shop = document.getElementById("shop_screen");

    main.style.display = "none";
    about.style.display = "none";
    resetScreen.style.display = "none";
    shop.style.display = "none";
}

function mainLoop(){
    //if no stored current demon, spawn one. otherwise use stored demon
    if(typeof currentDemon=="undefined"){
        spawnDemon();
    }
    else{
        refreshDemons();
    }
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("shopgold").innerHTML = gold;
    demonCombat();
    setTimeout(mainLoop, 1000) //loops this function every second
}

//when the window loads, run these functions
window.onload = function() {
    loadGame();
    saveGame();
    mainLoop();
}