(function( app ){
   'use strict';
   
   app.controller('ClienteController', function( $scope, ClienteService ){
    //Controle para OrderBy e Filter
    $scope.decrescente = false;
    $scope.selectedColumn = 'id';

    //Controle de exibição da tabela/formulario
    $scope.showTable = true;

    

    //Seta a coluna para ser filtrada/ordenada
    $scope.setColumn = function ( columnName ){
        $scope.selectedColumn = columnName;

        //determina o ordenação decrescente (false)
        $scope.decrescente = !$scope.decrescente;
    }

    //Retornar para o FILTER qual a coluna será utilizada na ordenação/filtro
    $scope.filter = function() {
        var filtro = {};

        filtro[$scope.selectedColumn] = $scope.textFilter;

        return filtro;
    }

    //Prepara a tela para um novo cadastro
    $scope.novo = function() {
        //Representar o cliente atual
        $scope.cliente = {
            nome: '',
            email: '',
            cidade: '',
            estado: ''
        }

        $scope.showTable = false;
    }

    //Cancelar a inclusao/edicao
    $scope.cancelar = function () {
        $scope.showTable = true;
    }

    //Salvar a inclusão/edição do cliente
    $scope.salvar = function() {
        console.log( $scope.cliente );
    }

    //Carrega uma lista de clientes
    ClienteService.listar().then(function( result ){
console.log(result.data);

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