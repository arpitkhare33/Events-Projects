choices= ['H','T'];
function hideAlertPrimary(){
    document.getElementById("alertPopupPrimary").classList.add("d-none");
}
function hideAlertDanger(){
    document.getElementById("alertPopupDanger").classList.add("d-none");
}
function toss(){
    coinSound.play();
    let userChoice  = document.getElementById("choice").value;
    let randomChoice = Math.floor(Math.random()*2);
    if (userChoice == choices[randomChoice]){
        document.getElementById("alertPopupPrimary").classList.remove("d-none");
        setTimeout(hideAlertPrimary,3000)
    }
    else{
        document.getElementById("alertPopupDanger").classList.remove("d-none");
        setTimeout(hideAlertDanger,3000)
    }
}

let coinSound = document.getElementById("coinSound");





coinBtn = document.getElementById("tossCoin");
coinBtn.addEventListener("click",toss);