(function(){
    function accountManager($http, $q){
        var accounts ={
            "ACC#1": {
                balance: 750 
            },
            "ACC#2":{
                balance: 6450
            }          
        }; 
        
        function withdrawFromAccount(account, amount){
            var result = $q.defer();
            if (account.balance >= amount){
                account.balance-=amount;
                console.log(accounts);
                result.resolve();
            } else {                
                result.reject({ status: 1, account: account});
            }
            return result;
        }
        
        function withdraw(accountId, amount){
            var result = $q.defer();
            var account = accounts[accountId];
            if (account){
                result = withdrawFromAccount(account, amount);
            } else {
                result.reject({status:0});
            }
        
            return result.promise;
        }
        function deposit(accountId, amount){
            var result = $q.defer();
            var account = accounts[accountId];
            if (account){
                account.balance += amount;
                result.resolve();
            } else {
                result.reject({status:0});
            }
        
            return result.promise;
        }
        function getBalance(accountId, amount){
            var result = $q.defer();
            var account = accounts[accountId];
            if (account){
                
                result.resolve(account.balance);
            } else {
                result.reject({status:0});
            }
        
            return result.promise;
        }
        
        
        return {
            withdraw: withdraw,
            deposit: deposit,
            getBalance:getBalance
        };
    }
    
    angular.module("bank").service("accountManager", accountManager);
})();