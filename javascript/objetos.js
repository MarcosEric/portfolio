// 1-forma de criar objeto

const pessoa = {
    nome: "Lucas",
    sobrenome: "Silva"
}
console.log(pessoa["sobrenome"]);

// 2- forma de criar objetos

const funcionario = new Object();
funcionario.nome = "karen"
funcionario.sobrenome = "joana"

console.log(funcionario.nome);

// 3- forma de criar objeto

function criarPessoa(nome,sobrenome,i){
    return{
        nome,
        sobrenome,
        idade: i,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }

    }
}

const p1 = criarPessoa("arthur","Silva",20)

const p2 = criarPessoa("joao","silva",34)

console.log(p1.nomeCompleto());
console.log(p2);
