//uses purchased upgrades to calculate every second's values
async function upgradeLoop(){
    for (var i=0;i<products[0].amount;i++) {
        blessing();
        await wait(1000/products[0].amount);
    }
    for (var i=0;i<products[1].amount;i++){
        terrify();
        await wait(1000/products[1].amount);
    }
}

async function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function blessing() {
    power += 1;
    document.getElementById("power").innerHTML = power;
}

function terrify() {
    if(currentDemon != null){
        if(currentDemon.curHealth > 1){
            currentDemon.curHealth -= 1;
            document.getElementById("demoncurhp").innerHTML = currentDemon.curHealth;
        } else {
            currentDemonBeaten();
        }
    }
}