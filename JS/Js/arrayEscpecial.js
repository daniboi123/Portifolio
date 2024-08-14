var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 ==0)
console.log(resultado);

var numerosFiltrados = numeros.filter(
    function(valor) {
        return valor > 5;
    }
);

console.log(numerosFiltrados);

function buscasValores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscasValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
    return valor > 5;
})
console.log(r1);

var funcionario = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoaListagem  = funcionario.filter( 
    function(valor){
        console.log(valor);
        return valor.nome.length < 5
})

console.log(pessoaListagem);

var produtos = [
    {id:1 ,descricao: "Smartphone", categoria: "eletronico"},
    {id:2 ,descricao: "notebook", categoria: "eletronico"},
    {id:3 ,descricao: "Geladeira", categoria: "eletrodomestico"},
    {id:4 ,descricao: "Fone", categoria: "eletronico"}
]

var eletronicos = produtos.filter(
    function(valor){
        return valor.categoria == "eletronico"
    }
)

console.log(eletronicos);


