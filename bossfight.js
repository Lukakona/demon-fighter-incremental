let Bosses = [];
var bossAttack = 0;
var bossVar;
class Boss {
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

function refreshBosses() {
    Bosses[0] = new Boss("BOSS1",1,1000,1000,10,50,500,"./img/demons/avia.png");
    Bosses[1] = new Boss("BOSS2",3,1000,50,5,0,2,"./img/demons/jakul.png");
    Bosses[2] = new Boss("BOSS3",4,25,25,7,0,1,"./img/demons/ivon.png");
    Bosses[3] = new Boss("BOSS4",5,30,30,10,1,2,"./img/demons/malbil.png");
    updateBoss(null);
    bossAttack = 0;
}

function toggleBossSelect(){
    var bossSelect = document.getElementById("boss_selection");
    var main = document.getElementById("main_screen");

    if(bossSelect.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        bossSelect.style.display = "block";
    }
}

function toggleBossFight(){
    var bossFight = document.getElementById("boss_fight");
    var main = document.getElementById("main_screen");

    if(bossFight.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        bossFight.style.display = "block";
    }
}

function bossLoop(bossNum){
    console.log("boss loop...");
    bossTimer(bossNum);
    updateBoss(bossNum);
}

function bossFight(bossNum){
    refreshBosses();
    document.getElementById("bossconsole").innerHTML = "";
    switch(bossNum){
        case 0:
            if(rank >= Bosses[0].rank){
                toggleBossFight(bossNum);
                bossVar = setInterval(bossLoop,1000,bossNum);
            }
    }
}

async function bossTimer(bossNum){
    for (var i=0;i<Bosses[bossNum].speed;i++) {
        if(bossAttack < 100) {
            bossAttack+=1;
            document.getElementById("bossattack").innerHTML = bossAttack;
        } else {
            clearInterval(bossVar);
            console.log("boss fight loss");
            document.getElementById("bossconsole").innerHTML = Bosses[bossNum].name + " has defeated you...";
            i = Bosses[bossNum].speed;
        }
        await wait(1000/Bosses[bossNum].speed);
    }
}

function updateBoss(bossNum){
    const img = document.getElementById("bossimg");
    if(bossNum==null){
        img.src = "./img/demons/demoncanvas.png"
        document.getElementById("bossname").innerHTML = "Something Powerful is Approaching...";
        document.getElementById("bosscurhp").innerHTML = "?";
        document.getElementById("bossmaxhp").innerHTML = "?";
        document.getElementById("bossattack").innerHTML = "?";
    } else {
        img.src = Bosses[bossNum].img;
        document.getElementById("bossname").innerHTML = Bosses[bossNum].name;
        document.getElementById("bosscurhp").innerHTML = Bosses[bossNum].curHealth;
        document.getElementById("bossmaxhp").innerHTML = Bosses[bossNum].maxHealth;
        document.getElementById("bossattack").innerHTML = bossAttack;
    }
}