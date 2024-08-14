class funcionario {
    constructor(nome, idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log("Olá, sou" + this.nome + "tenho" + this.idade +"anos" + "Meu Cargo Atual" + this.cargo);
    }

    trabalhar(){
        console.log(this.nome + "está trabalhando");
    }
}

class gerente extends funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(this.nome + "está gerenciando o departamento de " + this.departamento)
    }
}

class desenvolvedor extends funcionario {
    constructor(nome,idade,cargo,linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(this.nome + "está programando em " + this.linguagem);
    }
}

p1 = new gerente("Vagner","58","Gerente", "Desenvolvimento de software");
p2 = new desenvolvedor("Daniel","19","Programador senior", "JavaScript");
console.log(p1);
console.log(p2);