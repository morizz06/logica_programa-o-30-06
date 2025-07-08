let nomes = ["João", "Gabriela", "Ana", "Roberto"]

let contador_letras = 0

for (let i = 0; i < nomes.length; ++i){
    if(nomes[i].length>5){
        ++ contador_letras
    }
}
 console.log(contador_letras)


