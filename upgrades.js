//uses purchased upgrades to calculate every second's values
async function upgradeLoop(){
    for (var i=0;i<products[0].amount;i++) {
        console.log("blessing: " + i);
        blessing();
        await wait(1000/products[0].amount);
    }
}

async function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function blessing() {
    power += 1;
    document.getElementById("power").innerHTML = power;
}