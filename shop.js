function toggleShop(){
    var shop = document.getElementById("shop_screen");
    var main = document.getElementById("main_screen");

    if(shop.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        shop.style.display = "block";
    }
}

function shopInfo(item){
    switch(item){
        case 'blessing':
        console.log("Adds one stored power a second!");
        const img = document.getElementById("productImg");
        img.src = "./img/villageprayer.png";
        document.getElementById("productTitle").innerHTML = "Village Blessing";
        document.getElementById("productDescription").innerHTML = "Blessings from the villagers you protect grant one stored power a second!";
        break;
    }
}