function isFibonacci(num) {
    if (num === 0 || num === 1) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    let a = 0;
    let b = 1;
    let fibonacci = a + b;
  
    while (fibonacci <= num) {
      if (fibonacci === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      }
      a = b;
      b = fibonacci;
      fibonacci = a + b;
    }
  
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
 
  const numeroInformado = 21;
  
  console.log(isFibonacci(numeroInformado));
  
/*
Resultado: O número 21 pertence à sequência de Fibonacci.

Exibir resultado no terminal:
- Ter o NodeJS instalado
- Abrir novo terminal (Ctrl + Shift + ')
- Digitar: node ex2.js
*/