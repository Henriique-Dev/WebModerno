// tagged tampletes - processa o templete dentro de uma função
function tag( partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Vitor'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)