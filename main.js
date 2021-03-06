var power = 0;
var gold = 0;
var rank = 0;
var currentDemon;

//stores power every click
function powerClick(){
    power = power + (1+products[2].amount);
    document.getElementById("power").innerHTML = power;
}

function attackClick(){
    //calculates an attack with stored power and updates board
    if(currentDemon != null){
        var dmg = power;
        var flinch = Math.floor(dmg / 2);
        if(power - currentDemon.curHealth > 0){
            power -= currentDemon.curHealth;
        }else {
            power = 0;
        }
        currentDemon.curHealth -= dmg;
        dmg = 0;
        attackCounter -= flinch;
        flinch = 0;
        document.getElementById("power").innerHTML = power;
        document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
        document.getElementById("demonattack").innerHTML = attackCounter;
        if(currentDemon.curHealth < 0){
            currentDemon.curHealth = 0;
            currentDemonBeaten();
        }
    }
    else{
        document.getElementById("console").innerHTML = 'You let loose a fearsome swing at nothing!';
    }
}

//check if theres saved data
function hasSave(){
    if(localStorage.currentDemon!="undefined" && localStorage.length>0){
        console.log(localStorage);
        return true;
    }
    return false;
}

//save values to local storage
function saveGame(){
    localStorage.gold = gold;
    localStorage.rank = rank;
    localStorage.currentDemon = JSON.stringify(currentDemon);
    localStorage.products = JSON.stringify(products);
    console.log("Game has been saved");
    console.log(localStorage);
}

//load via localstorage values only if rank exists in localstorage
function loadGame(){
    console.log(hasSave());
    if(!hasSave()){
        createProducts();
        console.log(products[0].name);
        return;
    }
    createProducts();
    rank = Number(localStorage.rank);
    gold = Number(localStorage.gold);
    currentDemon = JSON.parse(localStorage.currentDemon);
    products = JSON.parse(localStorage.products);
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
    var bossFight = document.getElementById("boss_fight");
    var bossSelect = document.getElementById("boss_selection")

    main.style.display = "none";
    about.style.display = "none";
    resetScreen.style.display = "none";
    shop.style.display = "none";
    bossFight.style.display = "none";
    bossSelect.style.display = "none";
}

function mainLoop(){
    //if no stored current demon, spawn one. otherwise use stored demon
    /*if(typeof currentDemon=="undefined"){
        spawnDemon();
    }
    else{
        refreshDemons();
    }*/
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("shopgold").innerHTML = gold;
    upgradeLoop();
    demonCombat();
}

//when the window loads, run these functions
window.onload = function() {
    loadGame();
    saveGame();
    setInterval(mainLoop, 1000) //loop every second
}