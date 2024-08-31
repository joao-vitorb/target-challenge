const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamento).reduce(
  (acc, valor) => acc + valor,
  0
);

const percentuais = {};
for (const estado in faturamento) {
  percentuais[estado] = (
    (faturamento[estado] / totalFaturamento) *
    100
  ).toFixed(2);
}

for (const estado in percentuais) {
  console.log(`${estado} - ${percentuais[estado]}%`);
}

/*
Resultado:
SP - 37.53%
RJ - 20.29%
MG - 16.17%
ES - 15.03%
Outros - 10.98%

Exibir resultado no terminal:
- Ter o NodeJS instalado
- Abrir novo terminal (Ctrl + Shift + ')
- Digitar: node ex4.js
*/