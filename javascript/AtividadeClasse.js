class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(SetorA){
        console.log("O funcionario João se apresenta no SetorA" + SetorA)
    }
    Trabalha(Empilhamneto){
        console.log("Trabalha com Empilhamneto" + Empilhamneto)
    }

}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo)
        this.departamento = departamento
    }
    Gerenciar(Equipe){
        console.log("O gerente Douglas também gerencia a Equipe" + Equipe)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,Linguagem){
        super(nome,idade,cargo)
        this.Linguagem = Linguagem
    }
    Programar(Javascript){
        console.log("O Desenvolvedor Marcos domina a Linguagem Javascript" + Javascript) 

    }
    
}

let João = new Funcionario();
João.seApresentar(" com as suas ferramentas");
João.Trabalha(" no SetorA");
let Douglas = new Gerente();
Douglas.Gerenciar(" toda do turno integral");
let Marcos = new Desenvolvedor();
Marcos.Programar(" desenvolvendo codigos");

function formulario(nome,idade,cidade){
    
}