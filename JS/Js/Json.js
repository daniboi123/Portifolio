const pessoa = {
    nome:'João',
    idade:25,
    profisso:'Desenvolvedor',
}

const pessoaJson = JSON.stringify(pessoa);
console.log(pessoa)
console.log(pessoaJson);

const pessoaObjeto = JSON.parse(pessoaJson);