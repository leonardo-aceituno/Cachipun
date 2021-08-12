// Inicializar variables
let contador = 0;
let maximo = 0;
let ganados = 0;
let perdidos = 0;
let empatados = 0;

let img_piedra = "<i class='far fa-hand-rock fa-5x'></i></i>";
let img_papel = "<i class='far fa-hand-paper fa-5x'></i></i>";
let img_tijera = "<i class='far fa-hand-scissors fa-5x'></i></i>";

alert("JUEGO" + "\n" + "CACHIPUN");
maximo = +prompt("Cuantas veces quieres jugar? :", "6")


// declarar funcion, generar numero aleatorio en tre 0 y 2
function aleatorio() {
    let aleatorio = parseInt(Math.floor(Math.random() * 3));
    return aleatorio;
}


// declara funcion, comportamiento usuario=piedra v/s valor de la maquina
function usuario_piedra(valor_maquina) {
    switch (valor_maquina) {
        case 0:
            document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
            document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
            break
            empatados++;
            break
        case 1:
            document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
            document.getElementById('maquina__mensaje').innerHTML = "GANADOR"
            break
        case 2:
            document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
            document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
            ganados++;
            break
    }
}

// declara funcion, comportamiento usuario=papel v/s valor de la maquina
function usuario_papel(valor_maquina) {
    switch (valor_maquina) {
        case 0: // U: papel v/s M:piedra
            document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
            document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
            ganados++;
            break
        case 1:
            document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
            document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
            empatados++;
            break
        case 2:
            document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
            document.getElementById('maquina__mensaje').innerHTML = "GANADOR"
            break
    }
}

// declara funcion, comportamiento usuario=tijera v/s valor de la maquina
function usuario_tijera(valor_maquina) {
    switch (valor_maquina) {
        case 0:
            document.getElementById('usuario__mensaje').innerHTML = "PERDEDOR"
            document.getElementById('maquina__mensaje').innerHTML = "GANADOR"
            break
        case 1:
            document.getElementById('usuario__mensaje').innerHTML = "GANADOR"
            document.getElementById('maquina__mensaje').innerHTML = "PERDEDOR"
            ganados++;
            break
        case 2:
            document.getElementById('usuario__mensaje').innerHTML = "EMPATE"
            document.getElementById('maquina__mensaje').innerHTML = "EMPATE"
            empatados++;
            break
    }
}

function desplegar_maquina(valor_maquina) {
    let despliegue_maquina = document.getElementById("maquina_mostrar");

    switch (valor_maquina) {
        case 0: // usuario --> Piedra
            despliegue_maquina.innerHTML = img_piedra
            break
        case 1: // usuario --> Papel
            despliegue_maquina.innerHTML = img_papel
            break
        case 2: // usuario --> Tijera
            despliegue_maquina.innerHTML = img_tijera
            break
    }
}

function desplegar_usuario(valor_usuario) {
    let despliegue_usuario = document.getElementById("usuario_mostrar");

    switch (valor_usuario) {
        case 0: // usuario --> Piedra
            despliegue_usuario.innerHTML = img_piedra
            break
        case 1: // usuario --> Papel
            despliegue_usuario.innerHTML = img_papel
            break
        case 2: // usuario --> Tijera
            despliegue_usuario.innerHTML = img_tijera
            break
    }
}

function finalizar() {
    // capturar el elemento con clase juego
    const el = document.querySelector('.juego');
    // Agregar clase para ocultar el elemento
    el.classList.add('d-none');

    alert("Fin del juego")

    const div_fin = document.querySelector('#fin');
    div_fin.classList.remove('d-none');

    document.getElementById("total").innerHTML = maximo;
    document.getElementById("ganados").innerHTML = ganados;
    document.getElementById("empatados").innerHTML = empatados;
    document.getElementById("perdidos").innerHTML = maximo - (ganados + empatados);
}



// declarar funcion princial con seleccion del usuario
function usuario(valor_usuario) {
    contador++;
    let valor_maquina = +aleatorio();


    desplegar_maquina(valor_maquina);
    desplegar_usuario(+valor_usuario);

    // validar datos por consola
     console.log("seleccion usuario: " + valor_usuario);
    // console.log("contador: " + contador);
     console.log("seleccion maquina: " + valor_maquina);

    switch (+valor_usuario) {
        case 0: // usuario --> Piedra
            usuario_piedra(valor_maquina)
            break
        case 1: // usuario --> Papel
            usuario_papel(valor_maquina)
            break
        case 2: // usuario --> Tijera
            usuario_tijera(valor_maquina);
            break
    }

    

    if (contador >= maximo) {
        finalizar();
    
    }


}