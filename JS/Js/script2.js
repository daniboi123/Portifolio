var valores  = [8,3,2,5,6];
console.log(valores[3]);

for(var pos = 0; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor" + valores[pos]);
};

var carros = [];
carros[0] = "Volvo";
carros[1] = "Ferrari";
carros[2] = "jeep";

var motos = new Array("BWM", "YAMAHA", "HONDA");


var soma = 0;
for(var pos = 0; pos < valores.length; pos++){
    soma += valores[pos];
    
};

var media = soma/valores.length;

console.log(media);

var retirado = valores.shift();
console.log(retirado)