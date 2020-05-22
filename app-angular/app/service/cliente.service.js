(function( app ){
    'use strict';

    app.service('ClienteService', function( $q, $localStorage ) {
        const deferred = $q.defer();

        function loadJSON() {
            //return $http.get('https://my.api.mockaroo.com/clientes.json?key=d66f5df0');
            //return $http.get('data/clientes.json');
            deferred.resolve({data: $localStorage.clientes || []});

            return deferred.promise;

        }

        function save() {

        }
        
        return {
            listar: loadJSON
        }

    });

})( appJS );