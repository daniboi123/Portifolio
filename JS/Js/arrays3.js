var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,1);
console.log(arr2);

// remove um elemento no array

var nomes = ["maria", "joao", "lucas", "pedro"];
var novos = nomes.splice(1,1,"luiz");
console.log(nomes);
// add um novo elemento no array
var pais = ["Brasil", "Argentina", "Colombia"];
 
pais.unshift("Uruguai");

console.log(pais);

//desafio

arrayNomes = ["Guilherma", "Manuel", "Samuel", "Davi","João"];

arrayNomes.unshift("Monica");

arrayNomes.splice(5,1);

console.log(arrayNomes);

arrayNomes.splice(2,1,"Emanuel")

console.log(arrayNomes);

/// aula 2 manipulando arrays

var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var gerente = ["Davi","Manuela"]
var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);
console.log(empresa);

arrayMesses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

var trimestre = arrayMesses.slice(0,3)
var trimestre1 = arrayMesses.slice(3,6)
var trimestre2 = arrayMesses.slice(6,9)
var trimestre3 = arrayMesses.slice(9,12)
console.log(trimestre);
console.log(trimestre1);
console.log(trimestre2);
console.log(trimestre3);



