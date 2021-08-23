function toggleShop(){
    var shop = document.getElementById("shop_screen");
    var main = document.getElementById("main_screen");

    if(shop.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        about.style.display = "block";
    }
}