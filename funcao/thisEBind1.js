const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre parafigmas: funcional e OO

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas( )