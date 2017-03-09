var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes.toLowerCase();// pá que amarre esas letras raras
}
   
    

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

       for (var i= 0; i < estudiantes.length; i++){ //ciclo para que itere sobre los elementos de array estudiantes
            var nombre = prompt("Ingresa el nombre del alumno"+i);
            var puntosTecnicos = prompt("Ingresa sus puntos técnicos"+i);
            var hse= prompt ("Ingresa sus puntos en HSE"+i);

       var estudiante = {//objeto literal de estudiante para poner las propiedades que debe llevara 
        nombre: nombre,
        puntosTecnicos:puntosTecnicos,
        hse:hse
        
        estudiante.push(estudiantes);

  };
    return estudiante;
}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
   estudiantes = new estudiante()//instancia del objeto estudiantes
        estudiantes.nombre = nombre,
        estudiantes.puntosTecnicos = puntosTecnicos,
        estudiantes.hse = hse


        
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante. + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante. + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.  + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    
}
