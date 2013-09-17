(function(){
    function LoginCtrl($scope,$location,loginManager){
        $scope.errorMessage = "";
        $scope.loginUser = function(password){
            var callback = function(){
                var result = loginManager.authenticate(password);
                
                result.then(function(){
                    location.href = "#/" + $location.search().action;
                }, function(){
                   $scope.errorMessage = "Authentication failed" ;
                });
            };
            if ($scope.$$phase) {
                callback();
            } else {
                $scope.$apply(callback);
            }
        }
        $scope.userPassword = "";
        $scope.$watch("number", function(newValue,oldValue){
            console.log("U", newValue);
            $scope.userPassword = $scope.userPassword || "";
            if ($scope.userPassword.length <4 && newValue){
                $scope.userPassword += String(newValue);
            }
        });
        
        $scope.$watch("command", function(newValue,oldValue){
            if (newValue == "clear"){
                $scope.userPassword =  "";
            }
        });
        
        
    }
    
    angular.module("bank").controller("LoginCtrl", LoginCtrl);
})();