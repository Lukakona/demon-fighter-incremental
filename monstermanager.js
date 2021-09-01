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
    Demons[0] = new Demon("Avia, The Last of Her Brood",0,10,10,10,1,1,"./img/demon1.png");
    Demons[1] = new Demon("Ja'Kul, Eater of Villages",0,50,50,5,0,2,"./img/demon2.png");
    Demons[2] = new Demon("Ivon, a Demon",0,25,25,10,1,1,"./img/demon3.png");
    Demons[3] = new Demon("Malbil, the Infinite Oracle",1,30,30,10,1,2,"./img/demon4.png");
}
//spawns a new demon
function spawnDemon(){
    refreshDemons();
    var randomnum;
    do{
        randomnum = Math.floor(Math.random() * ((3+rank) - .2));
        console.log(randomnum);
    }while(randomnum>=4); //ensure the number wont hit the rank cap (since theres a chance!)
    currentDemon = Demons[randomnum];
    return currentDemon;
}

function demonCombat(){
    console.log(currentDemon.name);
    const img = document.getElementById("demonimg");
    img.src = currentDemon.img;
    attackCounter+=currentDemon.speed;
    document.getElementById("demonname").innerHTML = currentDemon.name;
    document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
    document.getElementById("demonmaxhp").innerHTML = currentDemon.maxHealth;
    document.getElementById("demonattack").innerHTML = attackCounter;
    if(currentDemon.curHealth<=0){
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
        const img = document.getElementById("demonimg");
        img.src = currentDemon.img;
        saveGame();
    }
    if(attackCounter >= 100){
        document.getElementById("console").innerHTML = currentDemon.name + " has bested you... But you fight again!";
        power = 0;
        document.getElementById("power").innerHTML = power;
        attackCounter = 0;
        currentDemon = spawnDemon();
    }
}