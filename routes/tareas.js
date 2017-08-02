var express = require("express");
var router = express.Router();

var mongoose =require("mongoose");
var Tarea = require("../model/Tarea.js");

tareas = [
  {articulo:1,talla:"L",precio_uni:30},
  {articulo:2,talla:"X",precio_uni:20}
]

router.get("/",function(req,res){
  Tarea.find({},function(err,resp){
    if(err){
      res.send({mensaje:"error"})
      return;
    }
    res.send(resp);
    console.log(resp);
  });
});

router.get('/:articulo', function(req, res){
  var id = req.params["articulo"];
  for (var i = 0; i < tareas.length; i++) {
    var t = tareas[i];
    if (t.articulo == id) {
      res.send(t);
      return;
    }
  }
  res.send({});
});

router.post('/', function(req, res){
	Tarea.create(req.body, function(err, post){
  	if (err) {
  		res.send({mensaje:"Hubo un error"});
  		return;
  	}
  	res.send({mensaje: "La tarea fue creada"});
  });
});

router.put('/:articulo', function(req, res){
  var id = req.params["articulo"];
  for (var i = 0; i < tareas.length; i++) {
    var t = tareas[i];
    if (t.articulo == id) {
      var talla = req.body["talla"];
      tareas[i].talla = talla;
      var precio_uni = req.body["precio_uni"];
      tareas[i].precio_uni = precio_uni;
      res.send({"mensaje" : "La tarea fue actualizada"});
      return;
    }
  }
  res.send({"mensaje" : "La tarea no fue encontrada"});
});

router.delete('/:articulo', function(req, res){
  var id = req.params["articulo"];
  for (var i = 0; i < tareas.length; i++) {
    var t = tareas[i];
    if (t.articulo == id) {
      tareas.splice(i, 1); //borrar elemento, posicion y elementos a borrar a partir de esa posicion
      res.send({"mensaje" : "La tarea fue eliminada"});
      return;
    }
  }
  res.send({"mensaje": "La tarea no fue encontrada"});
});

module.exports = router;
