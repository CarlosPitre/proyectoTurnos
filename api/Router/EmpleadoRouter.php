<?php
$app->get('/empleado', "EmpleadoControl:getAll");
$app->get('/empleado/sucursal', "EmpleadoControl:getallactivos");
$app->get('/empleado/{id}', "EmpleadoControl:getById");
$app->post('/empleado', "EmpleadoControl:post");
$app->post('/empleadoAdmin', "EmpleadoControl:postEmpleado");
$app->delete('/empleado/{id}', "EmpleadoControl:delete");
$app->put('/empleado/{id}',"EmpleadoControl:update");
$app->post('/empleado/sesion', "EmpleadoControl:sesion");
$app->put('/empleado/{id}/idpush', "EmpleadoControl:updatePush");
$app->get('/sucursal/{idSucursal}/{idServicio}/empleado', "EmpleadoControl:getEmpleadosBySucursal");
$app->get('/sucursal/{idSucursal}/empleados/turnos', "EmpleadoControl:getEmpleadosBySucursal2");
$app->get('/sucursal/{idSucursal}/empleados', "EmpleadoControl:getEmpleadosBySucursal3");
$app->put('/empleado/{id}/pass',"EmpleadoControl:updatePass");
$app->post('/empleado/login', "EmpleadoControl:sesionlogin");
$app->post('/superadmi', "EmpleadoControl:postsuperadmin");
$app->put('/empleado/estado/admin/{id}',"EmpleadoControl:updateadminestado");
$app->put('/empleado/estado/admin/desac/{id}',"EmpleadoControl:updateadminestadodesactivar");
$app->get('/empleado/bysucursal/{id}', "EmpleadoControl:getEmpleadoByIdsucursal");
$app->get('/empleado/bysucursal/empleado/{id}', "EmpleadoControl:getEmpleadoByIdsucursalempleado");
$app->get('/empleado/getempresaxByIdsucursal/{id}',"EmpleadoControl:getempresaxByIdsucursal");
$app->get('/empleadomax',"EmpleadoControl:maxId");
$app->put('/trabajador/estado/{id}',"EmpleadoControl:updateestado");
$app->get('/empleado/{idEmpleado}/servicio/{idServicio}/informacion', "EmpleadoControl:getEmpleadosAll");
$app->get('/empleado/{idEmpleado}/estadoOnline', "EmpleadoControl:getEstadoEmpleado");
$app->put('/empleado/{idEmpleado}/estadoOnline',"EmpleadoControl:updateEstadoEmpleado");

$app->put('/empleado/foto/{id}',"EmpleadoControl:fotoperfil");

$app->get('/empleado/reporte/{idsucursal}/{fechainicial}/{fechafinal}',"EmpleadoControl:reporteempleado");

$app->get('/empleado/buscar/{peticion}',"EmpleadoControl:encontrarempleado");
$app->post('/empleado/email',"EmpleadoControl:enviaremail");
$app->put('/clave/empleado/{id}',"EmpleadoControl:claveupdate");
//$app->get('/empleado/reporte/{idsucursal}',"EmpleadoControl:reporteempleado");

$app->get('/minutos/sucursal/{idSucursal}/servicio/{idServicio}',"EmpleadoControl:getTiempoBySucursalEmpleado");

$app->get('/empleado/disponibles/{idServicio}/{idSucursal}/{fecha}/{hora}/{cupos}',"EmpleadoControl:empleadosDisponibles");
