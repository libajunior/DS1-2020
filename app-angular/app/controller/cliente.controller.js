(function( app ){
   'use strict';
   
   app.controller('ClienteController', function( $scope, ClienteService ){

    $scope.decrescente = false;
    $scope.selectedColumn = 'nome';

    $scope.setColumn = function ( columnName ){
        $scope.selectedColumn = columnName;

        //determina o ordenação decrescente (false)
        $scope.decrescente = !$scope.decrescente;
    }

    $scope.filter = function() {
        var filtro = {};

        filtro[$scope.selectedColumn] = $scope.textFilter;

        return filtro;
    }

    //Carrega uma lista de clientes
    ClienteService.listar().then(function( result ){
        $scope.clientes = result.data;
    }).catch(function( error ) {
        if (error.status == 404) {
            $scope.msgerro = 'O recurso não foi encontrado';
        } else {
            $scope.msgerro = error.statusText;
        }
        
    });

   });

})( appJS );