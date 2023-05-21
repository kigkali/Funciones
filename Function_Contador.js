function contarPalabras(texto) {
    // Remover los caracteres de puntuación y convertir el texto a minúsculas
    var textoLimpio = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    // Dividir el texto en palabras utilizando el espacio en blanco como separador
    var palabras = textoLimpio.split(" ");
    // Filtrar las palabras vacías
    var palabrasFiltradas = palabras.filter(function(palabra) {
      return palabra !== "";
    });
    // Contar la cantidad de palabras filtradas
    var cantidadPalabras = palabrasFiltradas.length;
  
    return cantidadPalabras;
  }
  
  // Ejemplo de uso
  var texto = "Hola, esto es un ejemplo de texto. Contemos las palabras.";
  console.log(contarPalabras(texto)); // Salida: 9