var pais = "Brasil";
if(pais =! "Brasil"){
    console.log("vc e estrangeiro")
}else{
    console.log("vc e brasileiro")
}

var idade = 22;
if(idade < 16){
    console.log("Não e maior de idade")
}else if (idade < 18 || idade > 65) {
    console.log("não vota, opcional")
}else{
    console.log("Voto obrigatorio")
}

var diaSem = 1;
switch(diaSem){
    case 1:
        console.log("Domingo");
    break;
    case 2:
        console.log("Segunda");
    break;
    case 3:
        console.log("Terça");
    default:
        console.log("Esse dia da semana não existe!")
}

var bebida = "coca cola";
switch(bebida){
    case "cafe":
        console.log("Cafe: 7 reais");
    break;
    case "leite":
        console.log("Leite: 5 reais");
        break;
    case "cha":
        console.log("Cha: 10 reais");
        break;
    default:
        console.log("Bebida não encontrada");
}