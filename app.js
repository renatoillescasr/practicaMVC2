var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var tareasRoutes = require('./routes/tareas');

mongoose.connect('mongodb://ds127963.mlab.com:27963/mvc2', function(err){
  if (err) {
    console.log("Connection error");
  }else{
    console.log("Connection successful");
  }
});

//Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine setup
app.set("view engine","jade");

//importacion de modelos y controladores
var modeloTarea = require('./model/Tarea')(app,mongoose);
var ControladorTarea = require('./controller/controller');

app.use(express.static("public"));

var routes = express.Router();
app.get("/",function(req,res){
  res.render("index");
});
app.use(router);

//API

var  tareas = express.Router();

tareas.routes('/controller')
	.get(ControladorTarea.findAllTarea)
	.post(ControladorTarea.addTarea);

tareas.routes('/controller/:id')
	.get(ControladorTarea.findById)
	.put(ControladorTarea.updateTarea)
	.delete(ControladorTarea.deleteTarea);

app.use('api', tareas);

app.listen(8081);
console.log("servidor corriendo");
