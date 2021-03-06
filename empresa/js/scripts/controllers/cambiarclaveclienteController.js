app.controller('cambiarclaveclienteController', function ($scope,$routeParams,inicioService) {

	$scope.idcliente = $routeParams.id;
    $scope.val = $routeParams.val;
	getPerfil();

	function getPerfil(){
		var promiseGet = inicioService.getcliente($scope.idcliente); 
        promiseGet.then(function (pl) {
        	if(pl.data == "" || $scope.val == ""){
        		location.href = "http://turnomovil.com/"
        	}
        },
        function (errorPl) {
            console.log('failure loading perfil', errorPl);
        });
	}

	function validar(){
        if(document.getElementsByName('pass')[0].value == "" || document.getElementsByName('pass1')[0].value=="")
            return true;
        else
            return false;
    }

	$scope.cambiar = function(){
		if(validar()){
            alert("Los campos son validos");
        }else{
            if(document.getElementsByName('pass')[0].value == document.getElementsByName('pass1')[0].value){

                var object = {
                    "pass":             document.getElementsByName('pass')[0].value
                };
                //alert(JSON.stringify(object));
                var promisePost = inicioService.putclavecliente(object,$scope.idcliente);

                promisePost.then(function (d) {

                       alert(d.data.msg);
                       location.href = "http://turnomovil.com/";
                        
                }, function (err) {

                        if(err.status == 401){
                            //alert(err.data.msg);
                            console.log(err.data.exception);

                        }else{

                            
                        }

                        console.log("Some Error Occured "+ JSON.stringify(err));
                }); 

            }else{
                alert("Las clave no coinciden");
            }  
        }
	}


})