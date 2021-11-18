function nivelFacil(){
    var intentos = 1;
    var arr = [26, 31, 28, 33, 30];
    
    var mensaje = "Usted se encuentra en el primer nivel el cual tiene 5 números diferentes en un rango de 20 a 35, tienes 3 intentos para adivinar 1";
    
    while (intentos <= 3) {
        var numero_usuario = prompt(mensaje, "0");
    
        numero_usuario = parseInt(numero_usuario);
    
        if (arr.find(x => x === numero_usuario)){
            alert(numero_usuario +" Encontrado en " +intentos+ " intentos");
            nivelIntermedio();
            break;
        }else{
            alert("El número no se encuentra en la lista");
        }
        intentos++;
    }
}

function nivelIntermedio(){
    var intentos = 1;
    var arr = [52, 65, 89, 59, 81, 43, 58, 71, 78, 68, 53, 82, 70, 60, 73];
    
    var mensaje = "Ahora usted se encuentra en el segundo nivel el cual tiene 15 números diferentes en un rango del 50 al 90, tienes 6 intentos para adivinar 1";
    
    while (intentos <= 6) {
        var numero_usuario = prompt(mensaje, "0");
    
        numero_usuario = parseInt(numero_usuario);
    
        if (arr.find(x => x === numero_usuario)){
            alert(numero_usuario +" Encontrado en " +intentos+ " intentos");
            nivelAvanzado();
            break;
        }else {
            alert("El número no se encuentra en la lista");
        }
        intentos++;
    }
}

function nivelAvanzado(){
    var intentos = 1;
    var arr = [111, 123, 145, 154, 150, 120, 147, 132, 115, 119, 129, 139, 149, 159, 117, 127, 135, 121, 118, 113, 146, 136, 122, 152, 149, 153, 138, 114, 116, 126];
    
    var mensaje = "Felicitaciones por llegar al último nivel el cual consta de 30 números diferentes en un rango del 110 al 160, tienes 10 intentos para adivinar 1";
    
    while (intentos <= 10) {
        var numero_usuario = prompt(mensaje, "0");
    
        numero_usuario = parseInt(numero_usuario);
    
        if (arr.find(x => x === numero_usuario)){
            alert(numero_usuario +" Encontrado en " +intentos+ " intentos");
            alert("!!!FELICIDADES ERES UN GENIO¡¡¡")
            break;
        }else {
            alert("El número no se encuentra en la lista");
        }
        intentos++;
    }

}

function menu() {
    var exit = true;

    do {
        var menu = parseInt(prompt("Bienvenido al número secreto\n"+ "1. Iniciar juego\n"+ "2. Salir\n"));

        switch (menu) {
            case 1:
                nivelFacil();            
                break;
            case 2:
                alert("Ha salido del juego");
                exit = false; 
                break;   
            default:
                alert("Número equivocado")
                break;
        }
    } while (exit);
}

menu();





