function formDinheiro(valor) {
    return "R$" + valor.toFixed(2).replace('.', ',')
}

console.log(formDinheiro(0.1 + 0.2))