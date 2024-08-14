var nome = "Danel Amorim";
var x = nome.length;
console.log(x); 
resoltado = x > 15 ? "Obrigado": "Por favor preencha seu nome completo";
console.log(resoltado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Barcelona vs Real Melhor time";

var posicao = jogo.indexOf("Real");

console.log(posicao);

var cortado = jogo.slice(13,);
console.log(cortado);

var val = jogo.includes("Real");
console.log(val);

var str1 = "Hello";

var str2 = " Turma";

var str3 = str1.concat(str2);
console.log(str3);

var frase = "           ola vc está aprendendo js";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr);