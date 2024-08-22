// 1. Criando um objeto literal

const pessoa1 = {
    nome: 'João',
    idade: 30,
    saudacao: function(){
        return `Olá! Meu nome é ${this.nome}`
    }
}

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.saudacao())

// ---------------------------------------------------------

const espacamento = '--------------------------------------'
console.log(espacamento)

// ---------------------------------------------------------

// 2. Criando um objeto usando construtor de Object()
const pessoa2 = new Object()
// acrescenta as propriedades ao objeto vazio
pessoa2.nome = 'Luiz Carlos'
pessoa2.idade = 20
pessoa2.saudacao = function(){
    return `Olá! Meu nome é ${this.nome}`
}
console.log(pessoa2.nome)
console.log(pessoa2.idade)
console.log(pessoa2.saudacao())

// ---------------------------------------------------------

console.log(espacamento)

// ---------------------------------------------------------

// 3. Usando uma função construtora = modelo
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.saudacao = function(){
        return `Olá! Meu nome é ${this.nome}`
    }
}

const joao = new Pessoa('Joao da Silva', 41)
const maria = new Pessoa('Maria da Silva', 39)

console.log(joao.nome)
console.log(joao.idade)
console.log(joao.saudacao())

// ---------------------------------------------------------

console.log(espacamento)

// ---------------------------------------------------------

console.log(maria.nome)
console.log(maria.idade)
console.log(maria.saudacao())

// ---------------------------------------------------------

console.log(espacamento)

// ---------------------------------------------------------

// 4. Usando Object.create()
// criando um protótipo
const pessoaPrototipo = {
    saudacao: function (){
        return `Olá! Meu nome é ${this.nome}`
    }
}

const rafael = Object.create(pessoaPrototipo)
rafael.nome = 'Rafael da Silva'
rafael.idade = 30

console.log(rafael.nome)
console.log(rafael.idade)
console.log(rafael.saudacao())