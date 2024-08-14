class pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá " + this.nome);
    }
    get nomeCompleto(){
        console.log("Olá " + this.nome + this.sobrenome);
    }

}

p1 = new pessoa("Daniel", " Amorim");
p1.falar();
p1.nomeCompleto;
class carro {
    constructor(nome, ano, cor, motor) {
        this.nome = nome;
        this.ano = ano;
        this.cor = cor;
        this.motor = motor;
    }

     get carroInfo(){
        console.log("Carro " + this.nome + this.ano + this.cor + this.motor);
    }
}

carroNew = new carro("Mustang ", " 2023", " Vermelho", " V8");
carroNew.carroInfo;