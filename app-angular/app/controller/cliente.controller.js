(function( app ){
   'use strict';
   
   app.controller('ClienteController', function( $scope, ClienteService ){

    $scope.filterColumn = 'nome';

    $scope.setFilterColumn = function ( columnName ){
        $scope.filterColumn = columnName;
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