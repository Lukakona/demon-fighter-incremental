//displays home screen
function homeScreen(){
    var main = document.getElementById("main_screen");
    hideAll();
    main.style.display = "block";
}

//about the author (me)
function toggleAbout(){
    var about = document.getElementById("about_screen");
    var main = document.getElementById("main_screen");

    if(about.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        about.style.display = "block";
    }
}

//reset function screen
function toggleReset(){
    var main = document.getElementById("main_screen");
    var resetScreen = document.getElementById("reset_screen");

    if(resetScreen.style.display == "block"){
        hideAll();
        main.style.display = "block";
    } else {
        hideAll();
        resetScreen.style.display = "block";
    }
}