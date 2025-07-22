Array.prototype.forEach2 = function(nome, indice) {
    aprovados.forEach(nome, indice)
} 

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(` ${indice + 1}) ${nome}`)
})


// Professor 

Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // valor atual, indice e array completo
    }
}

aprovados.forEach2(function(nome, indice) {
    console.log(` ${indice + 1}) ${nome}`)
})
