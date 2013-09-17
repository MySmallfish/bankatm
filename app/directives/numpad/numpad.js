(function(){
    function createNumpad(){
        return {
            restrict:"E",
            templateUrl: "app/directives/numpad/numpad.html",
            scope: {
                number:"="    ,
                command:"="
            },
            link: function(scope,elm,attrs){
                
                elm.find("button").bind("click", function(e){
                    scope.$apply(function(){scope.number=null; scope.command =null;});
                    scope.$apply(function(){
                        
                        if (e.target.innerHTML == "Clear"){
                          scope.command = "clear"  ;
                        } else if (e.target.innerHTML == "."){
                            scope.command = ".";
                        } else {
                            scope.number = parseInt(e.target.innerHTML,10);    
                            scope.command = "digit";
                        }
                    })
                    
                })
            }
        }
    }    
    angular.module("bank").directive("bankNumpad",createNumpad);
})();