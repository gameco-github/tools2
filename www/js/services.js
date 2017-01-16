angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('MostrarType', ['$http','$Global', function($http,$Global){
	return {
		mostrar : function(){
		return $http.post($Global.url+'/api/tipos');
		}
	}
}])
.factory('MostrarGastos', ['$http', function($http){
	return {
		mostrar : function(id){
		return $http.post('http://gameco.dev/api/misgastos',{'id':id});
		}
	}
}])
.factory('GuardarGasto', ['$http', function($http){
	return {
		agregar :function(id,tipo,cantidad,token){
	       
           return $http.post("http://gameco.dev/api/gastos",{'id': id,'tipo': tipo,'cantidad': cantidad,'_token':token});
		}
	}
}])

.factory('Login', ['$http', function($http){
	return {	
		Entrar : function(email,contra){
	      
            return $http.post("http://gamecotools.com.mx/api/auth_login",{'email': email,'password': contra});
          
		}

	}
}])
.factory('$Global', function() {
  return {
  	  url : 'http://gamecotools.com.mx',
      token : '',
      id : '',
      mis_gastos : ''
  }
})