(function(app) {
    'use strict';

    app.service('SignService', function($q) {
        function signin() {
            const deferred = $q.defer();

            return deferred.promisel;
        }
        function signup() {
            const deferred = $q.defer();

            return deferred.promisel;
        }
        function logout() {
            const deferred = $q.defer();

            return deferred.promisel;
        }
        return {
            entrar: signin,
            cadastrar: signup,
            sair: logout
        }
    });

})( appJS );