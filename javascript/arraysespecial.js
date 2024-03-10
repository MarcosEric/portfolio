var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosfiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(numerosfiltrados);

function buscarValores(valor){
    return valor < 5;
}

var numerosencontrados = numeros.filter(buscarValores);

console.log(numerosencontrados);

var funcionario = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionario.filter(
    function(valor){
        return valor.nome.length < 5
    });
console.log(pessoasListagem);


