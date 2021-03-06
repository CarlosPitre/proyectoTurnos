var arrayPermiso = [];
var session = {

	setUsuario: function(user){      
       sessionStorage.setItem("usuario",user);   
       console.log(user)    
    },

    setPermisos: function(permisos){      
       sessionStorage.setItem("permisos",permisos);       
    },

    setModulos: function(modulos){      
       sessionStorage.setItem("modulos",modulos);       
    },

    getPermisos:function (){        
        var obj = JSON.parse(sessionStorage.getItem("permisos"));        
        //alert(obj)
        if (obj){            
            arrayPermiso= obj[0].permisos.split(",");
        } else{
           location.href = "../public_web/index.html#/cliente/inicioSesion";
        }             
    },   

    /// Obtiene todos los Datos del Usuario
    getUsuario: function(){      
        return this.validarObjectLocal("usuario")? JSON.parse(sessionStorage.getItem("usuario")) :  null;       
    },

    getId: function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.id;
        }
    },
    
    validarObjectLocal: function(string){        
        return sessionStorage.getItem(string) !== "" && sessionStorage.getItem(string) !== undefined && sessionStorage.getItem(string) !== null;        
    },

    cerrarSesion: function(){
        sessionStorage.setItem("usuario","");
        sessionStorage.removeItem("usuario");        
        sessionStorage.setItem("modulos","");
        sessionStorage.removeItem("modulos");
        sessionStorage.setItem("permisos","");
        sessionStorage.removeItem("permisos");
        location.href = "http://turnomovil.com/#/iniciosesion";
    }, 

    //obtenemos el nombre de usuario
    getUser:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.identificacion;
        }
    }, 

    //obtenemos el nombre y apellido del usuario
    getNombre:function(){
    	var obj = JSON.parse(sessionStorage.getItem("usuario"));
    	if (obj){            
            return obj.nombre;
        }
    },

    getEstado:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.estado;
        }
    },

    getPerfil:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.nombreperfil;
        }
    },

    getIdperfil:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.idPerfil;
        }
    },

    getIdsucursal:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.idSucursal;
        }
    },

    getCorreo:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.correo;
        }
    },

    getIdempresa:function(){
        var obj = JSON.parse(sessionStorage.getItem("usuario"));
        if (obj){            
            return obj.idEmpresa;
        }
    },

    /*cerrarSesion: function(){
        sessionStorage.setItem("usuario","");
        sessionStorage.removeItem("usuario");        
        location.href = "../PagesTurno/#/iniciosesion";
    },*/

    getPermiso_0:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_0;
        }
    },

    getPermiso_1:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_1;
        }
    },

    getPermiso_2:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_2;
        }
    },

    getPermiso_3:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_3;
        }
    },

    getPermiso_4:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_4;
        }
    },

    getPermiso_5:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_5;
        }
    },

    getPermiso_6:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_6;
        }
    },

    getPermiso_7:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_7;
        }
    },

    getPermiso_8:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_8;
        }
    },

    getPermiso_9:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_9;
        }
    },

    getPermiso_10:function(){
        var obj = JSON.parse(sessionStorage.getItem("permisos"));
        if (obj){            
            return obj.permiso_10;
        }
    },

    getModulo_0:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_0;
        }
    },

    getModulo_1:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_1;
        }
    },

    getModulo_2:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_2;
        }
    },

    getModulo_3:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_3;
        }
    },

    getModulo_4:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_4;
        }
    },

    getModulo_5:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_5;
        }
    },

    getModulo_6:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_6;
        }
    },

    getModulo_7:function(){
        var obj = JSON.parse(sessionStorage.getItem("modulos"));
        if (obj){            
            return obj.modulo_7;
        }
    }


}