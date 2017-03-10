var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
   
    return estudiantes;
}
   
    

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

      
            var nombre = prompt("Ingresa el nombre del alumno");
            var ptsTecnicos = parseInt(prompt("Ingresa sus puntos técnicos")); 
            var ptsHse= parseInt(prompt ("Ingresa sus puntos en HSE"));

       var estudiante = {
        nombre: nombre,
        tecnicos:ptsTecnicos,
        hse:ptsHse
        
     };
      estudiantes.push(estudiante);
      return estudiante;
}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.tecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hse  + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var lista = " ";
    for (var i = 0; i < estudiantes.length; i ++){
        lista += mostrar(estudiantes[i]);
    }
    return lista;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS 
    var buscarNombre= estudiantes.filter(function (estudiante){
        return estudiante.nombre.toLowerCase() === nombre.toLowerCase()
    }); 
                                             
     return buscarNombre;
    
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
     var estudiantesOrdenados = estudiantes.sort(function(a,b){
      return a.tecnicos < b.tecnicos;
    });
    return estudiantesOrdenados;
} 

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var estudiantesOrdenado = estudiantes.sort(function(a ,b){
        return a.hse < b.hse;
    });
    return estudiantesOrdenado;
}
