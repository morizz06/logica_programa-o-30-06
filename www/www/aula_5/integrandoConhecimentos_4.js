let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let contadorImpares = 0;

for (let i = 0; i < numeros.length; ++i) {
  if (numeros[i] % 2 === 1) {
    contadorImpares++;
  }
}

console.log(contadorImpares);
