let notas = [7,5,6,4,8]

let resultado = []

for(let i = 0; i < notas.length; ++i){
    if(notas[i]<6){
        resultado.push(6)
    }else{
        resultado.push(notas[i])
    }
}
console.log(resultado)