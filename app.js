// function submitDetails(){
//     let userName = document.getElementById("name").value;
//     console.log(userName);
//     document.getElementById("alert").innerHTML = "Hello " +" your details are entered.";
    
// }
let users=[]
function addUser(){
    let user = document.getElementById("name").value;
    users.push(user);
    console.log(users);
    // document.getElementById("msg").innerHTML = user +" added successfully"
}
function hideAlert(){
    document.getElementById("alertPop").classList.add("d-none");
}
function findLucky(){
    let numUsers = users.length;
    let randomUser = Math.floor(Math.random()*numUsers);
    console.log(users[randomUser]+" is the lucky winner of the game");
    document.getElementById("alertPop").classList.remove("d-none");
    setTimeout(hideAlert,3000)
    // document.getElementById("alertPop").classList.add("d-none")
}



let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click",addUser);


let luckyButton = document.getElementById("findLucky");
luckyButton.addEventListener("click",findLucky);

