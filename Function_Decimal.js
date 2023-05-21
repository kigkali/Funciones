function decimalARomano(decimal) {
    var valores = [
      { valor: 1000, simbolo: "M" },
      { valor: 900, simbolo: "CM" },
      { valor: 500, simbolo: "D" },
      { valor: 400, simbolo: "CD" },
      { valor: 100, simbolo: "C" },
      { valor: 90, simbolo: "XC" },
      { valor: 50, simbolo: "L" },
      { valor: 40, simbolo: "XL" },
      { valor: 10, simbolo: "X" },
      { valor: 9, simbolo: "IX" },
      { valor: 5, simbolo: "V" },
      { valor: 4, simbolo: "IV" },
      { valor: 1, simbolo: "I" }
    ];
  
    var resultado = "";
    for (var i = 0; i < valores.length; i++) {
      while (decimal >= valores[i].valor) {
        decimal -= valores[i].valor;
        resultado += valores[i].simbolo;
      }
    }
  
    return resultado;
  }
  
  // Ejemplos de uso
  console.log(decimalARomano(5));   // Salida: V
  console.log(decimalARomano(25));  // Salida: XXV
  