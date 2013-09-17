(function(){
    function loginManager($http, $q){
        function checkPassword(password){
            var result = $q.defer();
            if (password === "1111"){
                result.resolve();
            } else {
                result.reject();
            }
            return result.promise;            
        }
        
        return {
            authenticate: checkPassword
        }
    }
    
    
    angular.module("bank").service("loginManager", loginManager);
})();