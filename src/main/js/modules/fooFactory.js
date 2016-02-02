app.factory('Pessoa', function () {
    return function(nome) {
        return {
            "nome": nome
        };
    };
});
