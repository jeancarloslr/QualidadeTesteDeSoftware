//src é onde fica o código gonte

class Soma{

    constructor(){
        this._numero1 = 1;
        this._numero2 = 4;
    }

    Adicao(){
        return this._numero1 + this._numero2;
    }
}

const situacao2 = (nota, media) =>{

    const resultado = 3 >= 4 ? "Aprovado" : "Reprovado"
    return resultado

}

function comparacao(){

    var a = 40;
    var b = 30;
    var situacao2
    if(a > b){
        situacao = true
    }else{
        situacao = false
    }

    return situacao
    
}

console.log(comparacao())


function Pessoa(_Nome, _SobreNome, _Idade, _CorCabelo){
    
    var nome = _Nome;
    var SobreNome = _SobreNome;
    var idade = _Idade;
    var CorCabelo = _CorCabelo;

    this.nome = function(){
        return nome + " " + SobreNome;

    }
    this.nome_idade = function(){
        return nome + " " + SobreNome + " tem idade igual a " + idade;

    }

    this.nome_CorCabelo = function(){
        return nome + " " + SobreNome + " tem cabelo com cor " + CorCabelo;
    }
}