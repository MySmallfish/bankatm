(function(){
    function TransactionCtrl($scope, $location,$filter,accountManager){
         $scope.accountId = "ACC#1";
        if ($location.search().amount){
            $scope.amount = $location.search().amount;
        } else {
            $scope.amount = 50;
           
        }
        $scope.approveWithdraw = function(){
            var result = accountManager.withdraw($scope.accountId, $scope.amount);
            result.then(function(){
                location.href="#/WithdrawConfirmation?amount=" + $scope.amount;    
            }, function(response){
                if (response.status === 1) {
                    var value = $filter("currency")(response.account.balance, "NIS ");
                    $scope.errorMessage = "Not enough balance, Your balance is: " + value
                } else {
                    $scope.errorMessage = "Account not found!";
                }
                
            })
            
            
        }
        $scope.withdraw = function(){
            location.href="#/ApproveWithdraw?amount=" + $scope.amount;
        }
        $scope.deposit = function(){
            accountManager.deposit($scope.accountId, $scope.amount).then(function(){
                location.href="#/DepositConfirmation?amount=" + $scope.amount;    
            }, function(response){
                if (respoinse.status === 1){
                    $scope.errorMessage = "Account not found"    ;
                } else {
                    $scope.errorMessage = "Unknown error"    ;
                }
                
            });
        }
        $scope.balance = function(){
            accountManager.getBalance($scope.accountId).then(function(balance){
                $scope.accountBalance = balance;
            });
        }
        
        
        $scope.$watch('checkImage', function(value) {
           if(value) {
              navigator.alert("check: " + value);
           }
        }, true);
        
    }
    
    angular.module("bank").controller("TransactionCtrl", TransactionCtrl);
})();