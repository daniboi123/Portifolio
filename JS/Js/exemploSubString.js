var s = "JavaScript e Python";

var pos1 = s.indexOf("Python");

var novaString = s.substring(13,19);
console.log(novaString);

var frase = "Ola mundo";
if(frase.startsWith("Ola")){
    let sub = frase.substring(4);
    let novaString = sub.replace("mundo", "pessoal")
    let novaStringMaiscula = novaString.toUpperCase();
    console.log(novaStringMaiscula);
}