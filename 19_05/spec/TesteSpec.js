// pasta spec é onde fica o teste automatizado

describe("Lista de testes", function(){

    //describe vai explicar o que esta testando geralmente o nome da class
    
    //dentro do describe é onde vai escrever os testes

    describe("Nível de cálculo", function(){
 
        it("somar corretamente os valores", function(){  // it explicação do teste

            var resultado = new Soma().Adicao();
            expect(resultado).toEqual(5); // api do jasmini expect = assert

        });
    });

    
    describe("Aprovado Reprovado", function () {

        it('Passou ou Casa caiu', function(){
            var res = situacao2()
            expect(res).toEqual('Reprovado')
        });
     });


     describe("qual maior ", function(){
        it('A ou B', function(){
            var res = comparacao()
            expect(res).toEqual(true);
        })
     })


     describe ("Pessoa", function (){

        var pessoa = new Pessoa ("Maria", "Pereira", 52, "Castanho");

        it("Método - nome", function(){
            expect("Maria Pereira").toBe(pessoa.nome());

        });

            it("Método - nome_idade", function(){
                expect("Maria Pereira tem idade igual a 52").toBe(pessoa.nome_idade());

            });

                it("Método - nome_CorCabelo", function(){
                    expect("Maria Pereira tem cabelo com cor Castanho").toBe(pessoa.nome_CorCabelo());
                });
            });
});
