//Exercicio 

let numeros = [1, 2, 3, 4, 5, 6];
  let  numeros_pares = numeros.filter(numeros_pares => numeros_pares % 2 ==0 )
console.log(numeros_pares)

// Exercício 2

let valores = [5, 12, 8, 20, 3, 15];
                                                                                                                                                                                                                                                                                                                                                                                
    console.log(maiores_10)
 
// Exercício 3

let nomes = ["Ana", "João", "Gabriel", "Lu"];

let nomes_menores = nomes.filter(nomes_menores => nomes_menores.length<5)
console.log(nomes_menores)

// Exercício 4

let lista= [0, 1, 0, 3, 5, 6, 7];

let maiores_zero = lista.filter(maiores_zero => maiores_zero>0)
console.log(maiores_zero)

// Exercício 5

let paises = ["Brasil", "Argentina", "Chile"];

paises.pop();
console.log(paises)


//exercicio 6

let senha = "Senha123"

if (senha.length<8){
  console.log("O minimo de carecteres para senha é 8")

}else{
  console.log("Senha válida")
}   