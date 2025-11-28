function funcionarOuNao(valor, chanceErro) {
    return new promise ((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}