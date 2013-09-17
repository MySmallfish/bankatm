(function(){
    
    var app = angular.module("bank",[]);
    app.config(function($routeProvider){
        $routeProvider
            .when("/", { templateUrl: "views/home.html", controller: "HomeCtrl" })
            .when("/Login", { templateUrl: "views/login.html", controller: "LoginCtrl" })
            .when("/Withdraw", { templateUrl: "views/withdraw.html", controller: "TransactionCtrl" })
            .when("/Deposit", { templateUrl: "views/deposit.html", controller: "TransactionCtrl" })
            .when("/Balance", { templateUrl: "views/balance.html", controller: "TransactionCtrl" })
            .when("/WithdrawConfirmation", { templateUrl: "views/confirm-withdraw.html", controller: "TransactionCtrl" })
            .when("/DepositConfirmation", { templateUrl: "views/confirm-deposit.html", controller: "TransactionCtrl" })
            .when("/ApproveWithdraw", { templateUrl: "views/approve-withdraw.html", controller: "TransactionCtrl" })
            .otherwise({ redirectTo: "/" });
    });
})();

