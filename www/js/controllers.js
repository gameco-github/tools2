angular.module('app.controllers', [])
  
.controller('fondoCtrl', ['$scope', '$stateParams', '$Global', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$Global) {
  
  $scope.agregarFondo = function(data){
      var settings ={ 
            "url": "http://gamecotools.com.mx/api/agregarFondo",
            "method": "POST",
            "data": {
              "id": "9",
              "cantidad": data,
              "_token": $Global.token
            }
          }
        $.ajax(settings).done(function (response) {
          console.log(response);
        });
  }


}])
   
.controller('gastosGamecoCtrl', ['$scope', '$stateParams', '$ionicPopup', 'Login', '$Global', '$state', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicPopup, Login, $Global, $state, $ionicPopup) {
   $scope.Entrar = function(){
    //eligio_arreola@hotmail.com
     if(!$scope.login){
      var alertPopup = $ionicPopup.alert({
                       title: 'Error de Ingreso',
                       template: 'Ingrese Usuario o Contraseña',
                       buttons: [{ text: 'OK' ,type: 'button-assertive'}]
                     });

        }else{ 
        var settings ={ 
            "url": "http://gamecotools.com.mx/api/auth_login",
            "method": "POST",
            "data": {
              "email": $scope.login.email,
              "password": $scope.login.password
            }
          }
        $.ajax(settings).done(function (response) {
          console.log(response);
           if (response['token']) {
                   $Global.token = response['token']['token'];
                   $Global.id = response['id']['id'];
                   $state.go('gasto');
           }else{
            var alertPopup = $ionicPopup.alert({
                           title: 'Error de Ingreso',
                           template: 'Usuario o Contraseña Incorrecta',
                           buttons: [{ text: 'OK' ,type: 'button-assertive'}]
                         });
           }
        });
       }
      }

}])
   
.controller('gastoCtrl', ['$scope', '$stateParams', 'MostrarType', 'GuardarGasto', '$Global', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MostrarType, GuardarGasto, $Global, $ionicPopup) {
     console.log($Global.token);
     MostrarType.mostrar().success(function(data,status,headers,config){
      $scope.tipos = data;
     })
    .error(function(data,status,headers,config){
       });
  
      $scope.SelectValue = function(mySelect){
          $scope.type = mySelect; 
      }
   
    $scope.agregarGasto = function(data,cantidad){
        $scope.bandera = false;
        if(data){
              if($scope.gasto.otro==""){ 
                    if($scope.type){ 
                        $scope.tipo = $scope.type;
                        $scope.bandera = true;
                    }else {
                      var alertPopup = $ionicPopup.alert({
                                   title: 'Error',
                                   template: 'Ingrese Tipo de Gasto',
                                   buttons: [{ text: 'OK' ,type: 'button-assertive'}]
                                 });
                    }
              }else{
                 $scope.tipo = $scope.gasto.otro;
                $scope.bandera = true;
              }
        }else if($scope.type){ 
            $scope.tipo = $scope.type;
            $scope.bandera = true;
        }else {
          var alertPopup = $ionicPopup.alert({
                       title: 'Error',
                       template: 'Ingrese Tipo de Gasto',
                       buttons: [{ text: 'OK' ,type: 'button-assertive'}]
                     });
        }


        if($scope.bandera){
          if(cantidad){
             $scope.bandera = true;
          }else{
             $scope.bandera = false;
            var alertPopup = $ionicPopup.alert({
                         title: 'Error',
                         template: 'Ingrese la Cantidad',
                         buttons: [{ text: 'OK' ,type: 'button-assertive'}]
                       });
          }
        }
        if($scope.bandera){
          var settings ={ 
              "url": "http://gamecotools.com.mx/api/gastos",
              "method": "POST",
              "data": {
                "id": $Global.id,
                "tipo": $scope.tipo,
                "cantidad": cantidad,
                "_token": $Global.token
              }
            }
          $.ajax(settings).done(function (response) {
            if(response=='true'){
              var alertPopup = $ionicPopup.alert({
                         title: 'Gasto',
                         template: 'Gasto Agregado',
                         buttons: [{ text: 'OK' ,type: 'button-positive'}]
                       });
                   $scope.cantidad="";
                   $scope.gasto.otro="";
            }
          });
       }
    }
}])

.controller('logoutCtrl', ['$scope', '$stateParams','$ionicPopup','$state', '$window',
    function ($scope, $stateParams,$ionicPopup,$state,$window) {
        $scope.reloadPage = function(){$window.location.reload('gastosGameco');}
        $scope.logout = function() {
          var confirmPopup = $ionicPopup.confirm({
             title: 'Salir',
             template: 'Estas seguro de Salir?'
           });
           confirmPopup.then(function(res) {
             if(res) {
                $state.go('gastosGameco');
                $scope.reloadPage();
             } else {
               
             }
           });
        }
}])