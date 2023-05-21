function contarVocales(texto) {
    // Convertir el texto a minúsculas
    var textoMinusculas = texto.toLowerCase();
    // Definir las vocales
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    // Inicializar un objeto para almacenar el conteo de vocales
    var conteoVocales = {};
  
    // Iterar sobre el texto
    for (var i = 0; i < textoMinusculas.length; i++) {
      var caracter = textoMinusculas[i];
      // Verificar si el caracter es una vocal
      if (vocales.includes(caracter)) {
        // Si es una vocal, incrementar el conteo correspondiente en el objeto
        if (conteoVocales[caracter]) {
          conteoVocales[caracter]++;
        } else {
          conteoVocales[caracter] = 1;
        }
      }
    }
  
    return conteoVocales;
  }
  
  // Ejemplos de uso
  var texto1 = "Hello world!";
  console.log(contarVocales(texto1));
  // Salida: { e: 1, o: 2 }
  
  var texto2 = "Te amo madre mía";
  console.log(contarVocales(texto2));
  // Salida: { a: 3, e: 2, i: 1, o: 1 }