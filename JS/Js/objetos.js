
//forma 1
const pessoa = {
    Nome:"Daniel",
    Sobrenome:"Henrique"

}

console.log(pessoa['Sobrenome'])
// froma 2

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.Sobrenome = "Joana"

console.log(funcionario.nome)

// forma 3

function criarPessoa(nome,Sobrenome,i){
    return {nome,
        Sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.Sobrenome}`
        }



    }
}

const p1 = criarPessoa("Arthur", "Silva",20)
const p2 = criarPessoa("João", "Silva",34)

console.log(p1.nomeCompleto);
console.log(p2);

function calcularImc(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        calculo(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if (indice < 18.5){
                console.log("abaixo do peso")
            }else if(indice >= 18.5 && indice < 24.9){
                console.log("Peso normal")
            }else if(indice >= 25 && indice < 29.9){
                console.log("Acima do peso")
            } else if(indice >= 30 && indice < 34.9) {
                console.log("Obesidade grau 1")
            }else if(indice >= 35 && indice < 39.9){
                console.log("Obesidade grau 2")
            }else if (indice > 40) {
                console.log("obesidade 3")
            }
        } 
        
    }
}


const dados1 = calcularImc("Arthur", "Silva", 1,70, 58)
dados1.calculo();