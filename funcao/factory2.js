 const criarProduto = function(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
 } 

console.log(criarProduto('lapis', 15))