var carro = [{modelo: 'Audi A3', marca: 'audi', ano: 2020,},
    {modelo: 'Compass', marca: 'Jepp', ano: 2021,}           
            ]

for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}

for (let c of carro){
    console.log(c.ano);
}


var c = 1;
while(c < 10){
    console.log(c);
    c++;
}

var t = 1;

do{
    console.log(t);
    t++
}while( t < 1)