app.service('fooService', ['Pessoa', function(Pessoa) {
    this.convidados = [
        new Pessoa('Marcelo'),
        new Pessoa('Henrique'),
        new Pessoa('Felipe')
    ];

    this.adicionarConvidado = function(convidado) {
        console.log('encontrou a function no service');
        this.convidados.push(new Pessoa(convidado.nome));
        return new Pessoa();
    }

}]);
