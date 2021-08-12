let piedra = 0;
let papel = 1;
let tijera = 2;
let test 
//let selector = +prompt("ingrese cantidad de juegos: ","3")

document.querySelectorAll("div.btn-options > button").forEach(function (elem) {
    elem.addEventListener('click', leerDatos, false);
    console.log(elem);
    test++
    console.log("TEST: "+ test);
});
    


// const el = document.querySelector('.container');
// el.classList.add('d-none');


function leerDatos() {
    let valor_usuario = +this.value; // capturar valor
    let valor_maquina = +random();
    console.log("AQUI El RAMDOM DE LA MAQUIINA: " + valor_maquina);
    console.log("AQUI El RAMDOM DE LA USER: " + valor_usuario);

    user(valor_usuario)
    machine(valor_maquina)

    switch (valor_usuario) {
        case 0: // valor usuario = piedra
            if (valor_maquina == papel) {
                document.getElementById("resultado-machine").innerHTML = "GANADOR";
                document.getElementById("resultado-user").innerHTML = "PERDEDOR";
            } else if (valor_maquina == tijera) {
                document.getElementById("resultado-machine").innerHTML = "PERDEDOR";
                document.getElementById("resultado-user").innerHTML = "GANADOR";
            } else {
                document.getElementById("resultado-machine").innerHTML = "EMPATE";
                document.getElementById("resultado-user").innerHTML = "EMPATE";
            }
            break
        case 1: //valor usuario = papel
            if (valor_maquina == piedra) {
                document.getElementById("resultado-machine").innerHTML = "PERDEDOR";
                document.getElementById("resultado-user").innerHTML = "GANADOR";
            } else if (valor_maquina == tijera) {
                document.getElementById("resultado-machine").innerHTML = "GANADOR";
                document.getElementById("resultado-user").innerHTML = "PERDEDOR";
            } else {
                document.getElementById("resultado-machine").innerHTML = "EMPATE";
                document.getElementById("resultado-user").innerHTML = "EMPATE";
            }
            break
        case 2: //valor usuario = tijera
            if (valor_maquina == piedra) {
                document.getElementById("resultado-machine").innerHTML = "GANADOR";
                document.getElementById("resultado-user").innerHTML = "PERDEDOR";
            } else if (valor_maquina == papel) {
                document.getElementById("resultado-machine").innerHTML = "PERDEDOR";
                document.getElementById("resultado-user").innerHTML = "GANADOR";
            } else {
                document.getElementById("resultado-machine").innerHTML = "EMPATE";
                document.getElementById("resultado-user").innerHTML = "EMPATE";
            }
    }

    //alert("continuear")
}

function random() {
    let random = parseInt(Math.floor(Math.random() * 3))
    return random
}



function user(valor_usuario) {
     switch (valor_usuario) {
        case 0:
            document.getElementById("comment-user_01").innerHTML = "<i class='far fa-hand-rock fa-5x'></i></i>";
            break;
        case 1:
            document.getElementById("comment-user_01").innerHTML = "<i class='far fa-hand-paper fa-5x'></i></i>";

            break;
        case 2:
            document.getElementById("comment-user_01").innerHTML = "<i class='far fa-hand-scissors fa-5x'></i></i>";
            break;
    }
}


function machine(valor_maquina) {
    switch (valor_maquina) {
        case 0: // Opcion piedra
            document.getElementById("comment-machine_01").innerHTML = "<i class='far fa-hand-rock fa-5x'></i></i>";
            break;
        case 1: // Opcion papel
            document.getElementById("comment-machine_01").innerHTML = "<i class='far fa-hand-paper fa-5x'></i></i>";
            break;
        case 2: // Opcion tijera
            document.getElementById("comment-machine_01").innerHTML = "<i class='far fa-hand-scissors fa-5x'></i></i>";
            break;
    }
}






//var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);
    //alert(eleccionUsuario);
    //alert(eleccionMaquina);

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        } 
    }

    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}