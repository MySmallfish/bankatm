(function(){
 
    function createCamera() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
         elm.on('click', function() {
             alert("CAMERA");
            navigator.camera.getPicture(function (imageURI) {
               scope.$apply(function() {
                  ctrl.$setViewValue(imageURI);
               });
            }, function (err) {
               ctrl.$setValidity('error', false);
            }, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
            
         });
      }
   };
    }
    
   angular.module("bank").directive("camera", createCamera);
   
})();