// Piedra --> Tijera --> Gana
// Piedra --> Papel  --> Pierde

// Tijera --> Piedra --> Pierde
// Tijera --> Papel  --> Gana

// Papel  --> Tijera --> Pierde
// Papel  --> Pieda  --> Gana

let piedra  = 0;
let papel   = 1;
let tijera  = 2;


console.log("piedra  = 0");
console.log("papel   = 1");
console.log("tijera  = 2");


let user = parseInt(prompt("Piedra-Papel-Tijera"))
let maquina = parseInt(Math.floor(Math.random()*3))
console.log("maquina :"+maquina);
console.log("*******************");
switch (user) {
    case 0:
        console.log("Usuario selecciona : 'Piedra'");
        
        if(maquina == papel){
            console.log("Maquina selecciona : 'Papel'");
            console.log("---> Ganador : MAQUINA <---");
        }else if(maquina == tijera){
            console.log("Maquina selecciona : 'Tijera'");
            console.log("---> Ganador : USUARIO <---");
        }else{
            console.log("Maquina selecciona : 'Piedra'");
            console.log("---> Es un Empate <---");
        }
        break;
    case 1:
        console.log("Usuario selecciona : 'Papel'");
        
        if(maquina == piedra){
            console.log("Maquina selecciona : 'Piedra'");
            console.log("---> Ganador : USUARIO <---");
        }else if(maquina == tijera){
            console.log("Maquina selecciona : 'Tijera'");
            console.log("---> Ganador : MAQUINA <---");
        }else{
            console.log("Maquina selecciona : 'Papel'");
            console.log("---> Es un Empate <---");
        }
        break;
    case 2:
        console.log("Usuario selecciona : 'Tijera'");
        
        if(maquina == piedra){
            console.log("Maquina selecciona : 'Piedra'");
            console.log("---> Ganador : MAQUINA <---");
        }else if(maquina == papel){
            console.log("Maquina selecciona : 'Papel'");
            console.log("---> Ganador : USUARIO <---");
        }else{
            console.log("Maquina selecciona : 'Tijera2'");
            console.log("---> Es un Empate <---");
        }
        break;
    default:
        console.log("opcion no valida");

}


////////////////////////

switch (+valor_usuario) {
    case 0: // usuario --> Piedra
        document.getElementById("usuario_mostrar").innerHTML = "<i class='far fa-hand-rock fa-5x'></i></i>";
        usuario_piedra(valor_maquina)
        // if (valor_maquina == 1) { // maquina -> papel
        //     document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
        //     document.getElementById('maquina__mensaje').innerHTML = "GANADOR"

        //     const elem = document.querySelector('.usuario__mensaje');
        //     elem.classList.add('bg-danger', 'text-light', 'fw-bold');
        // } else if (valor_maquina == 2) { // maquina -> tijera
        //     document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
        //     document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
        //     ganados++;
        // } else { // maquina -> piedra
        //     document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
        //     document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
        //     empatados++;
        // }
        break
    case 1: // usuario --> Papel
        document.getElementById("usuario_mostrar").innerHTML = "<i class='far fa-hand-paper fa-5x'></i></i>";
        if (valor_maquina == 0) { // maquina -> piedra
            document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
            document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
            ganados++;
        } else if (valor_maquina == 2) { // maquina -> tijera
            document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
            document.getElementById('maquina__mensaje').innerHTML = "GANADOR"
        } else { // maquina -> papel
            document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
            document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
            empatados++;
        }
        break
    case 2: // usuario --> Tijera
        document.getElementById("usuario_mostrar").innerHTML = "<i class='far fa-hand-scissors fa-5x'></i></i>";
        if (valor_maquina == 0) { // maquina -> piedra
            document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
            document.getElementById('maquina__mensaje').innerHTML = "GANADOR"
        } else if (valor_maquina == 1) { // maquina -> papel
            document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
            document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
            ganados++;
        } else { // maquina -> papel
            document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
            document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
            empatados++;
        }
        break
}