var app = angular.module("App",[]);

app.controller("KontaktCtrl", function($scope,$http){
   $scope.msg = "Selam Alejkum"; 
   
   $scope.dergoMesazh = function(){
    //    alert($scope.emri + ' -- ' + $scope.mesazhi);
    
    var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
    
    $http.post('http://radio-pendimi.com/mobile/send-angular.php',{
        'emri': $scope.emri,
        'mesazhi': $scope.mesazhi
    },config).then(function(resp){
        console.log(resp);
        $scope.notification = resp.data.results;
    });
    
   } //end dergoMesazh
   
   $scope.resetFields = function(){
       $('#notification').text("");
       $scope.emri = "";
       $scope.mesazhi = "";
   }
});