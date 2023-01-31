
document.getElementById('boton').onclick= function(){
    console.log("evento click");
    document.getElementById("hobbie").innerHTML = "Cantante en el Coro Femenino de Madrid"
}

const collection = document.getElementsByClassName("experiencia y habilidades");
for (let i = 0; i <collection.length; i++) {
    collection[i].style.backgroundColor = "lightblue";
}