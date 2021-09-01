var products = [];
var currentProduct = null;
class product {
    constructor(name, amount, cost, description, img) {
        this.name = name;
        this.amount = amount;
        this.cost = cost;
        this.description = description;
        this.img = img;
    }
}

function createProducts(){
    products[0] = new product("Village Blessing", 0, 10, "Blessings from the villagers you protect grant one stored power a second!", "./img/villageprayer.png");
    products[1] = new product("Terrify", 0, 10, "A steeled gaze to soften the resolve of even the most powerful demon.", "./img/terrify.png");
    products[2] = new product("Water Breathing", 0, 20, "Focusing on a unique breathing pattern for swordsmen adds stored power every click!", "./img/water.png");
}

function toggleShop(){
    var shop = document.getElementById("shop_screen");
    var main = document.getElementById("main_screen");

    if(shop.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        updateShop();
        shop.style.display = "block";
    }
}

function updateShop(){
    const imgBuy = document.getElementById("buyButton");
    const imgIcon = document.getElementById("productImg");
    if(currentProduct != null){
        if(products[currentProduct].cost <= gold){
            console.log("buy button active");
            imgBuy.src = "./img/buy.png";
        } else {
            imgBuy.src = "./img/buylocked.png";
        }
        imgIcon.src = products[currentProduct].img;
        document.getElementById("productTitle").innerHTML = products[currentProduct].name;
        document.getElementById("productDescription").innerHTML = products[currentProduct].description;
        document.getElementById("productCost").innerHTML = products[currentProduct].cost;
        document.getElementById("productOwned").innerHTML = products[currentProduct].amount;
    }
    else {
        imgIcon.src = "./img/unknown.png";
        document.getElementById("productTitle").innerHTML = "-No Item Selected-";
        document.getElementById("productDescription").innerHTML = "Click an item to see information!";
        document.getElementById("productCost").innerHTML = "?";
        document.getElementById("productOwned").innerHTML = "?";
        imgBuy.src = "./img/buylocked.png";
    }
}

function shopInfo(item){
    const img = document.getElementById("productImg");
    switch(item){
        case 'blessing':
            if(currentProduct == 0){
                currentProduct = null;
            }else{
                currentProduct = 0;
            }
            break;
        case 'terrify':
            if(currentProduct == 1){
                currentProduct = null;
            } else{
                currentProduct = 1;
            }
            break;
        case 'water':
            if(currentProduct == 2){
                currentProduct = null;
            } else {
                currentProduct = 2;
            }
            break;
    }
    updateShop();
}

function buyProduct(){
    if(currentProduct != null){
        if(products[currentProduct].cost <= gold){
            gold -= products[currentProduct].cost;
            products[currentProduct].amount +=1;
            products[currentProduct].cost = Math.floor(products[currentProduct].cost * 2.7);
            updateShop();
            console.log("purchased "+products[currentProduct].name);
            saveGame();
        } else {
            console.log("cannot afford "+products[currentProduct].name);
        }
    }
}