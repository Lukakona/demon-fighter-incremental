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
/* product[0] -  */
function createProducts(){
    products[0] = new product("Village Blessing", 0, 10, "Blessings from the villagers you protect grant one stored power a second!", "./img/villageprayer.png");
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
    const img = document.getElementById("buyButton");
    if(currentProduct != null){
        if(products[currentProduct].cost <= gold){
            console.log("buy button active");
            img.src = "./img/buy.png";
        } else {
            img.src = "./img/buylocked.png";
        }
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
    }
    if(currentProduct != null){
        updateShop();
        img.src = products[currentProduct].img;
        document.getElementById("productTitle").innerHTML = products[currentProduct].name;
        document.getElementById("productDescription").innerHTML = products[currentProduct].description;
        document.getElementById("productCost").innerHTML = products[currentProduct].cost;
        document.getElementById("productOwned").innerHTML = products[currentProduct].amount;
    } else {
        img.src = "./img/unknown.png";
        document.getElementById("productTitle").innerHTML = "-No Item Selected-";
        document.getElementById("productDescription").innerHTML = "Click an item to see information!";
        document.getElementById("productCost").innerHTML = "?";
        document.getElementById("productOwned").innerHTML = "?";
    }
}

function buyProduct(){
    if(currentProduct != null){
        if(products[currentProduct].cost <= gold){
            console.log("purchased "+products[currentProduct].name);
        } else {
            console.log("cannt afford "+products[currentProduct].name);
        }
    }
}