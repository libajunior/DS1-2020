(function( app ){
    'use strict';

    app.service('ClienteService', function( $http ) {

        function loadJSON() {
            return $http.get('https://my.api.mockaroo.com/clientes.json?key=d66f5df0');
        }
        
        return {
            listar: loadJSON
        }

    });

})( appJS );