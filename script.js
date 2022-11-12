let user_points = sessionStorage.getItem("points");
document.querySelector(".points").innerHTML = user_points;

if (user_points > 60){
    let won = document.createElement("h1");
    won.innerHTML = "Ganaste!!!";
    let div = document.getElementById("seh");
    let qpro = document.createElement("img");
    qpro.src = "./xd.jpeg";
    div.appendChild(won);
    div.appendChild(qpro);
    } else {
    let lose = document.createElement("h1");
    lose.innerHTML = "Perdiste :("
    let div = document.getElementById("seh");
    let qnoob = document.createElement("img");
    qnoob.src = "./xdd.jpg";
    div.appendChild(lose);
    div.appendChild(qnoob);
}