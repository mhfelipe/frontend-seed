app.controller('fooController', ['$scope', 'fooService', function ($scope, fooService) {

    $scope.convidados = fooService.convidados;

    $scope.adicionarConvidado = function() {
        console.log('encontrou a function no controller');
        $scope.convidado = fooService.adicionarConvidado($scope.convidado)
    }

}]);