var app = angular.module('appDemo', []);
app.controller('controlador',['$scope','$http',function($scope,$http){
 
 $scope.formData = {};

    $scope.registrar = function(formData){

    //alert('Form submitted with' + JSON.stringify(formData));
    
    $http.post('http://localhost/001/api/?a=registrar', JSON.stringify(formData)).success(function(data,status,headers,config){
        if(data){
          $('#msg').html("Operación exitosa!");
        }
        console.log(data+" - "+status+" - "+ headers+" - "+config);
      })
      .error(function(error,status,headers,config){
      console.log(error+" - "+status+" - "+ headers+" - "+config);
      });
  }
}]);