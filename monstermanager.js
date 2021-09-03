var attackCounter = 0;
//define demons
let Demons = [];

class Demon {
    constructor(name, rank, curHealth, maxHealth, speed, vigor, gold, img) {
        this.name = name;
        this.rank = rank;
        this.curHealth = curHealth;
        this.maxHealth = maxHealth;
        this.speed = speed;
        this.vigor = vigor;
        this.gold = gold;
        this.img = img;
    }
}
//idk their health never reset so im using this.
function refreshDemons() {
    Demons[0] = new Demon("Avia, The Last of Her Brood",0,10,10,10,0,1,"./img/demons/avia.png");
    Demons[1] = new Demon("Ja'Kul, Eater of Villages",0,50,50,5,0,2,"./img/demons/jakul.png");
    Demons[2] = new Demon("Ivon, a Demon",0,25,25,7,0,1,"./img/demons/ivon.png");
    Demons[3] = new Demon("Malbil, the Infinite Oracle",1,30,30,10,1,2,"./img/demons/malbil.png");
    Demons[4] = new Demon("Kaeli, the Forgetful",1,20,20,25,1,3,"./img/demons/kaeli.png");
    Demons[5] = new Demon("Nek, of the Thoroughly Content",1,50,50,15,1,3,"./img/demons/nek.png");
}
//spawns a new demon
function spawnDemon(){
    refreshDemons();
    var rankNum;
    var demonNum;
    var foundDemon = false;
    do{
        rankNum = Math.floor(Math.random() * ((1+rank) - .5));
    }while(rankNum>=2); //ensure the number wont hit the rank cap (since theres a chance!)
    console.log("rank: " + rankNum);
    while(foundDemon == false) {
        demonNum = Math.floor(Math.random() * 6); //CHANGE THIS VALUE WHEN YOU ADD A NEW DEMON!!!!!!!!!
        if(Demons[demonNum].rank == rankNum)    {
            foundDemon = true;
        }
    }
    console.log("demon number: " + demonNum);
    currentDemon = Demons[demonNum];
    return currentDemon;
}
//updates the ui with the demons information
function updateDemon(){
    const img = document.getElementById("demonimg");
    img.src = currentDemon.img;
    document.getElementById("demonname").innerHTML = currentDemon.name;
    document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
    document.getElementById("demonmaxhp").innerHTML = currentDemon.maxHealth;
    document.getElementById("demonattack").innerHTML = attackCounter;
}

function demonCombat(){
    updateDemon();
    if(currentDemon.curHealth <= 0){
        document.getElementById("console").innerHTML = "You beat " + currentDemon.name + "!! " + currentDemon.gold + " Gold was dropped!";
        gold += currentDemon.gold;
        document.getElementById("gold").innerHTML = gold;
        //slightly raises the players rank for killing strong monsters
        if((rank-1)<=currentDemon.rank){
            rank += .1;
            console.log(rank);
        }
        attackCounter = 0;
        currentDemon = spawnDemon();
        updateDemon();
        saveGame();
    }
    attackTimer();
    demonLoop();
}

async function attackTimer(){
    for (var i=0;i<currentDemon.speed;i++) {
        if(attackCounter < 100) {
            attackCounter+=1;
            document.getElementById("demonattack").innerHTML = attackCounter;
        } else {
            document.getElementById("console").innerHTML = currentDemon.name + " has bested you... But you fight again!";
            power = 0;
            document.getElementById("power").innerHTML = power;
            attackCounter = 0;
            if(rank >= (currentDemon.rank+1)){
                rank -= .1;
            }
            currentDemon = spawnDemon();
            updateDemon();
            saveGame();
        }
        await wait(1000/currentDemon.speed);
    }
}

function vigor() {
    if(currentDemon.curHealth < currentDemon.maxHealth){
        currentDemon.curHealth += 1;
        console.log("adding hp: " + currentDemon.curHealth);
        document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
    }
}

async function demonLoop() {
    for (var i=0;i < currentDemon.vigor;i++){
        vigor();
        await wait(1000/currentDemon.vigor);
    }
}