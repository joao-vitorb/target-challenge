function inverterString(str) {
    let stringInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
  
    return stringInvertida;
  }

  const stringOriginal = "Frase de exemplo"; // A frase de exemplo poderá ser alterada para qualquer outra

  console.log(inverterString(stringOriginal));
  
/*
Resultado:
olpmexe ed esarF

Exibir resultado no terminal:
- Ter o NodeJS instalado
- Abrir novo terminal (Ctrl + Shift + ')
- Digitar: node ex5.js
*/