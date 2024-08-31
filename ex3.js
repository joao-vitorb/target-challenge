const dados = {
  faturamento: [
    { dia: 1, valor: 1000.0 },
    { dia: 2, valor: 1200.0 },
    { dia: 3, valor: 0.0 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 1500.0 },
    { dia: 6, valor: 0.0 },
    { dia: 7, valor: 1600.0 },
  ],
};

const faturamentoDiario = dados.faturamento.filter((dia) => dia.valor > 0);

const menorFaturamento = Math.min(...faturamentoDiario.map((dia) => dia.valor));
const maiorFaturamento = Math.max(...faturamentoDiario.map((dia) => dia.valor));

const totalFaturamento = faturamentoDiario.reduce(
  (acc, dia) => acc + dia.valor,
  0
);
const mediaMensal = totalFaturamento / faturamentoDiario.length;

const diasAcimaMedia = faturamentoDiario.filter(
  (dia) => dia.valor > mediaMensal
).length;

console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);

/*
Resultado:
Menor faturamento: R$ 1000.00
Maior faturamento: R$ 1600.00
Dias com faturamento acima da média: 2

Exibir resultado no terminal:
- Ter o NodeJS instalado
- Abrir novo terminal (Ctrl + Shift + ')
- Digitar: node ex3.js
*/
